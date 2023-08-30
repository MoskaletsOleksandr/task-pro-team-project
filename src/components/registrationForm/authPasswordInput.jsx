import React from 'react';
import { ErrorMessage } from 'formik';
import AuthTextError from './authTextError';
import { AuthLabelStyled, Input } from './RegistrationFormStyled';
import Eyesvg from './Eyesvg';

function authPasswordInput(props) {
  const { placeholder, name, onClick, ...rest } = props;
  return (
    <div className="form-control">
      <AuthLabelStyled>
        <Input name={name} placeholder={placeholder} {...rest} />
        <Eyesvg onClick={onClick} />
      </AuthLabelStyled>
      <ErrorMessage name={name} component={AuthTextError} />
    </div>
  );
}

export default authPasswordInput;
