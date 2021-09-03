import React, { Component } from 'react';
import axios from 'axios';

import './formComment.scss';

class FormComment extends Component {

    state = {
        fields: {
            message: ''
        },
        errors: {}
    }

    handleValidation() {
        let { fields } = this.state;
        let formIsValid = true;
        let errors = {};

        if (!fields['message']) {
            errors['message'] = 'Le message de votre commentaire ne peut pas être vide';
        } else if (fields['message'].length > 200) {
            errors['message'] = 'Le contenu du commentaire ne peut pas dépasser 200 caractères';
        }

        if (Object.keys(errors).length !== 0) {
            formIsValid = false;
        }
        this.setState({ errors });

        return formIsValid;
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.handleValidation()) {
            let { message } = this.state.fields;
            const user = JSON.parse(localStorage.getItem('user'));

            axios.post('http://localhost:3001/api/comment', {
                message,
                postId: this.props.postId
            }, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
                .then(res => {
                    const comment = res.data.comment;
                    comment.User = { username: this.props.user.username }
                    console.log(comment);
                    this.props.addComment(comment);

                    // Reset form fields
                    this.setState({ fields: { message: '' } });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    handleChange = (event) => {
        let { fields } = this.state;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        })
    }

    render() {
        let { errors } = this.state;

        return (
            <form action="" className="form-group form-comment" onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <input className="input" name="message" placeholder="Ecrivez votre commentaire" id={'message'+this.props.postId} onChange={this.handleChange} value={this.state.fields['message']} />
                    {errors['message'] ? (
                        <div className="message is-danger">
                            <div className="message-header">
                                <p>{errors['message']}</p>
                            </div>
                        </div>
                    ) : '' }
                </div>

                <button type="submit" className="button btn-comment">
                    envoyer
                </button>
            </form>
        )
    }
}

export default FormComment;