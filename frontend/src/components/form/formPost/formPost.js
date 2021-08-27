import React, { Component } from 'react';
import './formPost.scss';
import axios from 'axios';

class FormPost extends Component {

    state = {
        fields: {
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        /* let { fields } = this.state; */
        axios.post('http://localhost:3001/api/auth/posts',{
        })
        .then(res => {
        })
        .catch(err => {
        })
    }

    handleChange = (event) => {
        let { fields } = this.state;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        })
    }

    render() {
        return (
            <>
                <form className="form-group form-post" method="post" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Donner un titre à votre post" name="post" value={this.state.fields['email']} onChange={this.handleChange} />
                            <span className="icon is-small is-left"><i className="fas fa-envelope"></i></span>
                            <span className="icon is-small is-right"><i className="fas fa-check"></i></span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <div className="file">
                                <label className="file-label">
                                    <input className="file-input" type="file" name="resume" />
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