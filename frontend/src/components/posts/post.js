import React, { Component } from 'react';
import './post.scss';

class Post extends Component {
    
    render() {
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

                

                <div className="post__comments">
                    <p className="post__comments-counter">
                    </p>
                </div>
            </div>
        )
    }
}

export default Post;