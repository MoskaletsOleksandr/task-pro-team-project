import React from 'react';
import { ErrorMessage } from 'formik';
import AuthTextError from './authTextError';
import { AuthLabelSyled, Input } from './RegistrationFormStyled';

function authInput(props) {
  const { placeholder, name, ...rest } = props;
  return (
    <div className="form-control">
      <AuthLabelSyled>
        <Input name={name} placeholder={placeholder} {...rest} />
      </AuthLabelSyled>
      <ErrorMessage name={name} component={AuthTextError} />
    </div>
  );
}

export default authInput;
