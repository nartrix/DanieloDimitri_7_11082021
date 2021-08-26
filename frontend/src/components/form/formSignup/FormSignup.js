import React, { Component } from 'react';
import './FormSignup.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FormSignup extends Component {

    state = {
        fields: {
            email: '',
            username: '',
            password: ''
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        let { fields } = this.state;
        axios.post('http://localhost:3001/api/auth/signup',{
            email: fields['email'],
            username: fields['username'],
            password: fields['password']
        })
        .then(res => {
            window.location.href = "/";
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
                <form className="form-group form-signup" method="post" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" name="email" value={this.state.fields['email']} onChange={this.handleChange} />
                            <span className="icon is-small is-left"><i className="fas fa-envelope"></i></span>
                            <span className="icon is-small is-right"><i className="fas fa-check"></i></span>
                        </div>
                    </div>
    
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="name" placeholder="username" name="username" value={this.state.fields['username']} onChange={this.handleChange} />
                            <span className="icon is-small is-left"><i className="fas fa-envelope"></i></span>
                            <span className="icon is-small is-right"><i className="fas fa-check"></i></span>
                        </div>
                    </div>
    
                    <div className="field">
                        <div className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" name="password" value={this.state.fields['password']} onChange={this.handleChange} />
                            <span className="icon is-small is-left"><i className="fas fa-lock"></i></span>
                        </div>
                    </div>
    
                    <div className="field">
                        <div className="control">
                            <button className="button is-success" type="submit">
                                Inscription
                            </button>
                        </div>
                    </div>
    
                    <div className="section-login">
                        <p>Vous n'avez pas de compte</p>
                        <Link to='/'>
                            Connexion
                        </Link>
                    </div>
                </form>
            </>
        );
    }
}
  
export default FormSignup;