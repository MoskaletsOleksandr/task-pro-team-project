import React from 'react';
import AuthInput from './authInput';
import AuthPasswordInput from './authPasswordInput';

function AuthController(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <AuthInput {...rest} />;
    case 'input-password':
      return <AuthPasswordInput {...rest} />;
    default:
      return null;
  }
}

export default AuthController;
