import React, { Component } from 'react';
import './formPost.scss';
import axios from 'axios';

class FormPost extends Component {

    state = {
        fields: {
            content: ''
        },
    }

    fileExtensions = [
        'gif', 'jpg', 'jpeg', 'png'
    ]

    constructor(props) {
        super(props);
        this.imageInput = React.createRef();
        this.newPostForm = React.createRef();
    }
    
    handleFormSubmit = (event) => { // Submit formData with authorization token 
        event.preventDefault();
        const { content } = this.state.fields;

        const user = JSON.parse(localStorage.getItem('user'));

        const formData = new FormData();
        formData.append('content', content);
        formData.append('image', this.imageInput.current.files[0]);

        axios.post('http://localhost:3001/api/post', formData, {
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            const post = res.data.post;
            post.User = { username: this.props.user.username };
            this.props.addPost(post);

            // Reset form fields
            this.newPostForm.current.reset();
            this.setState({ fields: { content: '' } });
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleChange = (event) => {
        const { fields } = this.state;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        });
    }

    render() {
        return (
            <>
                <form className="form-group form-post" method="post" onSubmit={this.handleFormSubmit} ref={this.newPostForm}>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Donner un titre à votre post" name="content" value={this.state.fields['content']} onChange={this.handleChange}  />
                            <span className="icon is-small is-left"><i className="fas fa-envelope"></i></span>
                            <span className="icon is-small is-right"><i className="fas fa-check"></i></span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <div className="file">
                                <label className="file-label">
                                    <input className="file-input" type="file" name="image" ref={this.imageInput} />
                                    <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Choose a file…
                                    </span>
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className="control">
                            <button className="button btn-publish" type="submit">
                                Publier
                            </button>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}
  
export default FormPost;