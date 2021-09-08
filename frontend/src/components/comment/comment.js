import React, { Component } from 'react';
import axios from 'axios';
import './comment.scss';

class Comment extends Component {

    handleCommentDelete = (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));

        axios.delete('http://localhost:3001/api/comment/'+ this.props.comment.id, {
            headers: {
                'Authorization': 'Bearer ' + user.token
            },
            data: {
                'Role': user.roles
            }
        })
            .then(() => {
                this.props.deleteComment(this.props.comment.id);
            })
            .catch(err => {
                console.log(err);
                window.alert('Une erreur est survenue, veuillez réessayer plus tard.');
            })

    }

    render() {

        const user = JSON.parse(localStorage.getItem('user'));

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
                    { user.roles && user.roles.includes("ROLE_MODERATEUR") ?
                        <button onClick={this.handleCommentDelete} className="button">Supprimer ce post</button> : ''
                    }
                </div>
            </div>
        )
    }
}

export default Comment;