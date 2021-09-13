import React, { Component } from 'react';
import './formSignup.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FormSignup extends Component {

    state = {
        fields: {
            email: '',
            username: '',
            password: ''
        },
        errors: {}
    }

    validation() {
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true

        // Email validation
        if (!fields['email']) {
            errors['email'] = 'L\'email ne peut pas être vide';
        }

        // Username validation
        if (!fields['username']) {
            errors['username'] = 'Le nom d\'utilisateur ne peut pas être vide';
        }

        // Password validation
        if (!/(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(fields['password'])) {
            errors['password'] = 'Le mot de passe doit contenir minimum 8 caractères avec au minimum un caractères minuscule et majuscule, et deux chiffres';
        }

        if (Object.keys(errors).length !== 0) {
            formIsValid = false;
        }
        this.setState({ errors });

        return formIsValid;
    }


    handleFormSubmit = (event) => { // Submit user
        event.preventDefault();
        if (this.validation()) {
            const { fields } = this.state;
            axios.post('http://localhost:3001/api/auth/signup',{
                email: fields['email'],
                username: fields['username'],
                password: fields['password']
            })
            .then(res => {
                window.location.href = "/login";
            })
            .catch(err => {
            })
        }
        
    }

    handleChange = (event) => {
        const { fields } = this.state;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        })
    }

    render() {
        let { errors } = this.state;

        return (
            <>
                <form className="form-group form-signup" method="post" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" name="email" value={this.state.fields['email']} onChange={this.handleChange} />
                            <span className="icon is-small is-left"><i className="fas fa-envelope"></i></span>
                        </div>
                        {errors['email'] ? (
                            <div className="notification is-danger">
                                {errors['email']}
                            </div>
                        ) : '' }
                    </div>
    
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="name" placeholder="username" name="username" value={this.state.fields['username']} onChange={this.handleChange} />
                            <span className="icon is-small is-left"><i className="fas fa-user"></i></span>
                        </div>
                        {errors['username'] ? (
                            <div className="notification is-danger">
                                {errors['username']}
                            </div>
                        ) : '' }
                    </div>
    
                    <div className="field">
                        <div className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" name="password" value={this.state.fields['password']} onChange={this.handleChange} />
                            <span className="icon is-small is-left"><i className="fas fa-lock"></i></span>
                        </div>
                        {errors['password'] ? (
                            <div className="notification is-danger">
                                {errors['password']}
                            </div>
                        ) : '' }
                    </div>
    
                    <div className="field">
                        <div className="control">
                            <button className="button btn-signup" type="submit">
                                Inscription
                            </button>
                        </div>
                    </div>
    
                    <div className="section-login">
                        <p>Vous n'avez pas de compte</p>
                        <Link to='/login'>
                            Connexion
                        </Link>
                    </div>
                </form>
            </>
        );
    }
}
  
export default FormSignup;