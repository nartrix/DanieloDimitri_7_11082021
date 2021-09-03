import React, { Component } from 'react';
import './post.scss';
import axios from 'axios';
import PropTypes from 'prop-types';
import FormComment from '../form/formComment/formComment';
import Comment from '../comment/comment';
import imgTest from '../../image/img-test.png';

class Post extends Component {

    state = {
        post: [],
        comments: []
    }

    getAllComments() {
        
        const user = JSON.parse(localStorage.getItem('user'));

        axios.get('http://localhost:3001/api/post/'+this.props.post.id+'/comment?sort=createdAt&order=asc', {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        })
            .then(res => {
                this.setState({ comments: res.data });
            })
            .catch(err => {
                console.log(err);
                window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l\'administrateur du site');
            })
    }

    addComment(comment) {
        let { comments } = this.state;
        comments.push(comment);
        this.setState({ comments });
    }
    
    render() {

        let { comments } = this.state;
        
        return (
            <div className="post">
                <div className="post-content">
                    <div className="post-header">
                        <div className="post-user">
                            <div className='img-account'>

                            </div>
                            <div className="post-name">{this.props.post.user.username}</div>
                        </div>
                    </div>

                    <div className="post-img">
                        { this.props.post.image ? <img src={this.props.post.image} alt="" className="post__picture"/> : '' }
                    </div>

                    <p className="post-title">
                        {this.props.post.content}
                    </p>
                    
                    <time className="post-date" dateTime={new Date(this.props.post.createdAt).toISOString()}>{new Date(this.props.post.createdAt).toLocaleDateString()}</time>
                </div>

                <div className="post-comments">
                    <FormComment postId={this.props.post.id} user={this.props.user} addComment={this.addComment.bind(this)}/>
                    { comments ? (comments.map(comment => {
                        return <Comment key={comment.id} comment={comment} user={this.props.user} />
                    })) : '' }
                </div>
            </div>
        )
    }
}

Post.prototypes ={
    post: PropTypes.object
}

Post.defaultProps = {
    post: {
        content: 'test',
        image: imgTest,
        createdAt: Date.now(),
        user: {
            username: 'toto'
        }
    }
  };

export default Post;