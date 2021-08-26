import React from 'react';
import '../../App.scss';
import './login.scss';
import FormLogin from '../form/formLogin/FormLogin';

function Login() {
    return (
      <>
        <div className="login-page">
          <FormLogin />
        </div>  
      </>
    );
  }
  
export default Login;