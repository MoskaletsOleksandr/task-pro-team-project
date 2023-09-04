import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { AuthButton } from 'components/common/authButton/AuthButton';
import AuthController from 'components/registrationForm/authControll';
import { RegistrationFormStyled } from 'components/registrationForm/RegistrationFormStyled';
import FormTitle from 'components/common/authTitle/AuthTitle';
import { authLoginValidationSchema } from 'validation/authValidation';
import { SignInThunk } from 'redux/auth/thunks';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

function LoginForm() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const onClick = e => {
    setVisible(!visible);
  };

  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(SignInThunk(values)).unwrap();
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error('Login failed');
    }
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
