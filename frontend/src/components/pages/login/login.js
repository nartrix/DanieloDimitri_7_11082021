import React from 'react';
import '../../../App.scss';
import './login.scss';
import FormLogin from '../../form/formLogin/formLogin';
import logoLogin from '../../../image/icon-login.png';

function Login() {
    return (
      <>
        <div className="login-page">
          <div className='img-login'>
            <img src={logoLogin} alt='logo' />
          </div>
          <FormLogin />
        </div>  
      </>
    );
  }
  
export default Login;
