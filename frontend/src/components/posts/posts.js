import React, { Component } from 'react';
import '../../App.scss';
import './posts.scss';
import Post from './post';
import axios from 'axios';
import FormPost from '../form/formPost/formPost';
/* import logoLoading from '../../image/icon-loading.png'; */

class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts(){
    /* const value = `; ${document.cookie}`;
    const parts = value.split(`; token=`);
    const token = parts.pop().split(';').shift(); */

    const user = JSON.parse(localStorage.getItem('user'));

    axios.get('http://localhost:3001/api/post?sort=createdAt&order=desc', {
        headers: {
            'Authorization': 'Bearer ' + user.token
        }
    })
    .then(res => {
        this.setState({ posts: res.data });
    })
    .catch(err => {
        console.log(err);
        window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l\'administrateur du site');
    })
  }

  addPost(post) {
    let { posts } = this.state;
    posts = [post, ...posts];
    this.setState({ posts });
  }
  
  render () {
    let { posts } = this.state;
    return (
      <>
        <div className="section-posts">
          <FormPost addPost={this.addPost.bind(this)} user={this.props.user} />
            <h1>Fil d'actualité</h1>
  
            <div className="posts-item">
                {/* <img src={logoLoading} alt='logo loading' /> */}
                { posts ? (posts.map(post => {
                    return <Post key={post.id} post={post}/>
                })) : '' }
            </div>
        </div>
      </>
    );
  }
}
  
export default Posts;