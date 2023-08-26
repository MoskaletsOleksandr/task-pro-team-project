import React from 'react';
import AuthInput from './authInput';

function AuthController(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <AuthInput {...rest} />;
    default:
      return null;
  }
}

export default AuthController;
