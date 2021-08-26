import React, { Component } from 'react';
import './FormLogin.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FormLogin extends Component {

    state = {
        fields: {
            email: '',
            password: ''
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        let { fields } = this.state;
        axios.post('http://localhost:3001/api/auth/login',{
            email: fields.email,
            password: fields.password
        })
        .then(res => {
            window.location.href = "/home";
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

    render () {
        return (
            <form className="form-group form-login" onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email" name="email" value={this.state.fields['email']} onChange={this.handleChange} />
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
                            Login
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