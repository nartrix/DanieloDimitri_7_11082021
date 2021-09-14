import React, { Component } from 'react';
import './formLogin.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FormLogin extends Component {

    state = {
        fields: {
            email: '',
            password: ''
        },
        errors: {}
    }

    validation() {
        let { fields } = this.state;
        let formIsValid = true;
        let errors = {};

        // Email validation
        if (!fields['email']) {
            errors['email'] = 'L\'email ne peut pas être vide';
        }

        // Password validation
        if (!fields['password']) {
            errors['password'] = 'Le mot de passe ne peut pas être vide';
        }

        if (Object.keys(errors).length !== 0) {
            formIsValid = false;
        }
        this.setState({ errors })

        return formIsValid;
    }

    handleFormSubmit = (event) => { // Submit post login
        event.preventDefault();
        if (this.validation()) {
            const { fields } = this.state;
            axios.post('http://localhost:3001/api/auth/login',{
                email: fields.email,
                password: fields.password
            })
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.data));
                window.location.href = "/home";
            })
            .catch(err => {
            })
        }
    }

    handleChange = (event) => {
        const { fields } = this.state;
        fields[event.target.name] = event.target.value;
        this.setState({fields})
    }

    render () {
        let { errors } = this.state;

        return (
            <form className="form-group form-login column is-6" onSubmit={this.handleFormSubmit}>
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
                        <button className="button btn-login" type="submit">
                            Connexion
                        </button>
                    </div>
                </div>
    
                <div className="section-login">
                    <p>Vous n'avez pas de compte</p>
                    <Link to='/signup'>
                        inscription
                    </Link>
                </div>
            </form>
        );
    }
    
}
  
export default FormLogin;
