import React from 'react';
import { ErrorMessage } from 'formik';
import AuthTextError from './authTextError';
import {  Input } from './RegistrationFormStyled';
import { AuthLabelStyled } from './RegistrationFormStyled';

function authInput(props) {
  const { placeholder, name, ...rest } = props;
  return (
    <div className="form-control">
      <AuthLabelStyled>
        <Input name={name} placeholder={placeholder} {...rest} />
      </AuthLabelStyled>
      <ErrorMessage name={name} component={AuthTextError} />
    </div>
  );
}

export default authInput;
