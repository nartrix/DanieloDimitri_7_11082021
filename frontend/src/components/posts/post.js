import React, { Component } from 'react';
import './post.scss';
import axios from 'axios';
/* import PropTypes from 'prop-types'; */
import FormComment from '../form/formComment/formComment';
import Comment from '../comment/comment';
/* import imgTest from '../../image/img-test.png'; */

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            showMore: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.addComment = this.addComment.bind(this);
      }
    

    componentDidMount() {
        this.getAllComments();
    }

    getAllComments() {
        
        const user = JSON.parse(localStorage.getItem('user'));

        axios.get('http://localhost:3001/api/post/'+this.props.post.id+'/comment?sort=createdAt&order=asc', {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        })
            .then(res => {
                console.log(res.data);
                this.setState({ comments: res.data });
            })
            .catch(err => {
                console.log(err);
                window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l\'administrateur du site');
            })
    }

    handleClick(e){
        this.setState({showMore: !this.state.showMore});
    }

    addComment(comment) {
        const { comments } = this.state;
        comments.push(comment);
        this.setState({ comments });
    }
    
    render() {

        const { comments, showMore } = this.state;
        const pager = 1;

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
                    <div className="comment-items">
                        { comments && showMore ? (comments.map(comment => {
                            return <Comment key={comment.id} comment={comment} />
                        })) : (comments.reverse().slice(0, pager).map(comment => {
                            return <Comment key={comment.id} comment={comment} />
                        })) }
                    </div>
        
                    <div className="btn-show" onClick={this.handleClick}>
                        <p className="show-more">voir plus</p>
                    </div>
                    <FormComment postId={this.props.post.id} user={this.props.user} addComment={this.addComment.bind(this)}/>
                </div>
            </div>
        )
    }
}

/* Post.prototypes ={
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
  }; */

export default Post;