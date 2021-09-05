import React, { Component } from 'react';
import './comment.scss';

class Comment extends Component {
    render() {
        return (
            <div className="media comment">
                <figure className="media-left">
                    <p className="image is-32x32">
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="utilisateur" />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                    <p>
                        {this.props.comment.message}
                    </p>
                    <p>
                        <strong>{this.props.comment.user.username}</strong> <small>{new Date(this.props.comment.createdAt).toLocaleDateString() + ' ' + new Date(this.props.comment.createdAt).getHours() + ':' + new Date(this.props.comment.createdAt).getMinutes() + ', '} </small>
                    </p>
                    </div>
                </div>
                <div className="media-right">
                    <button className="delete"></button>
                </div>
            </div>
        )
    }
}

export default Comment;