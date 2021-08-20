import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import FormSignup from '../formSignup/FormSignup';

function signup() {
    return (
      <>
        <FormSignup />
        <div className="section-login">
          <p>Vous n'avez pas de compte</p>
          <Link to='/signup'>
            Connexion
          </Link>
        </div>
      </>
    );
  }
  
export default signup;