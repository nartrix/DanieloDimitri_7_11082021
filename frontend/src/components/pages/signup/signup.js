import React from 'react';
import '../../../App.scss';
import './signup.scss';
import FormSignup from '../../form/formSignup/formSignup';
import logoSignup from '../../../image/icon-signup.png';

function signup() {
    return (
      <>
        <div className="signup-page columns is-flex-direction-column is-align-items-center">
        <div className='img-signup'>
            <img src={logoSignup} alt='logo signup' />
          </div>
          <FormSignup />
        </div>
      </>
    );
  }
  
export default signup;