import React, { Component } from 'react';
import '../../../App.scss';
import './account.scss';
import axios from 'axios';
import Navbar from '../../navbar/navbar';
import Post from '../../posts/post';


class Account extends Component {
  state = {
    user: [],
    myPosts: []
  }

  componentDidMount() {
    this.getMyPosts();
  }

  getMyPosts(){
    /* const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    const token = parts.pop().split(';').shift(); */

    const user = JSON.parse(localStorage.getItem('user'));

    axios.get('http://localhost:3001/api/post/user/'+ user.userId +'?sort=createdAt&order=asc', {
        headers: {
            'Authorization': 'Bearer ' + user.token
        }
    })
    .then(res => {
        this.setState({ user });
        this.setState({ myPosts: res.data });
    })
    .catch(err => {
        console.log(err);
        window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l\'administrateur du site');
    })
  }

  handleDelete(event) {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    axios.delete('http://localhost:3001/api/users', {
        headers: {
            'Authorization': 'Bearer ' + user.token
        }
    })
        .then(() => {
            window.location.href = '/logout';
        })
        .catch(err => {
            console.log(err);
            window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l\'administrateur du site');
        })

  }

  render() {
    const {user, myPosts} = this.state;
    return (
      <>
        <Navbar />
        <div className="profile">
            <div className="profile-content">
                <div className="profile-header">
                  <div className='img-account'>

                  </div>
                  <div className="profile-name">
                      {user.username}
                  </div>
                </div>
                <button className="button btn-profile">
                    Modifier mon profil
                </button>
                <button className="delete" onClick={this.handleDelete}>
                </button>
            </div>
            <div className="my-posts">
              <h1>Mes posts</h1>

              <div className="myposts-items columns is-flex-direction-column is-align-items-center">
                { myPosts ? (myPosts.map(post => {
                      return <Post key={post.id} post={post}/>
                  })) : <div className='loader'></div> }
              </div>
            </div>
          </div>
      </>
    );
  }  
}

export default Account;