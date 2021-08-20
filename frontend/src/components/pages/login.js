import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import FormLogin from '../formLogin/FormLogin';

function Login() {
    return (
      <>
        <FormLogin />
        <div className="section-login">
          <p>Vous n'avez pas de compte</p>
          <Link to='/signup'>
            inscription
          </Link>
        </div>
      </>
    );
  }
  
export default Login;