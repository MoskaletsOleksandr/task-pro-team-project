import React from 'react';
import { ErrorMessage } from 'formik';
import AuthTextError from './authTextError';
import { AuthLabelSyled, Input } from './RegistrationFormStyled';
import Eyesvg from './Eyesvg';

function authPasswordInput(props) {
  const { placeholder, name, onClick, ...rest } = props;
  return (
    <div className="form-control">
      <AuthLabelSyled>
        <Input name={name} placeholder={placeholder} {...rest} />
        <Eyesvg onClick={onClick} />
      </AuthLabelSyled>
      <ErrorMessage name={name} component={AuthTextError} />
    </div>
  );
}

export default authPasswordInput;
