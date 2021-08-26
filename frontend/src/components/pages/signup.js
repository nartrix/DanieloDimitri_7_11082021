import React from 'react';
import '../../App.scss';
import './signup.scss';
import FormSignup from '../form/formSignup/FormSignup';

function signup() {
    return (
      <>
        <div className="signup-page">
          <FormSignup />
        </div>
      </>
    );
  }
  
export default signup;