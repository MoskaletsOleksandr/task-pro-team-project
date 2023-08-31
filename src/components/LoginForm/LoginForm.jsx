import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { AuthButton } from 'components/common/authButton/AuthButton';
import AuthController from 'components/registrationForm/authControll';
import { RegistrationFormStyled } from 'components/registrationForm/RegistrationFormStyled';
import FormTitle from 'components/common/authTitle/AuthTitle';
import { authLoginValidationSchema } from 'validation/authValidation';

function LoginForm({ getData }) {
  const [visible, setVisible] = useState(false);
  const onClick = e => {
    setVisible(!visible);
  };

  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    getData(values);
    resetForm();
  };
 

  return (
    <RegistrationFormStyled>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={authLoginValidationSchema}
      >
        {formik => (
          <Form autoComplete="off">
            <FormTitle />
            <AuthController
              control="input"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
            <AuthController
              control="input-password"
              type={visible ? 'text' : 'password'}
              placeholder="Enter your password"
              name="password"
              onClick={onClick}
            />

            <AuthButton>Login Now </AuthButton>
          </Form>
        )}
      </Formik>
    </RegistrationFormStyled>
  );
}

export default LoginForm;
