import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import { AuthButton } from 'components/common/authButton/AuthButton';
import AuthController from './authControll';
import { RegistrationFormStyled } from './RegistrationFormStyled';
import FormTitle from 'components/common/authTitle/AuthTitle';
import { authValidationSchema } from 'validation/authValidation';
import { useDispatch } from 'react-redux';
import { SignUpThunk } from 'redux/auth/thunks';
import { toast } from 'react-hot-toast';

function RegistrationForm() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const onClick = e => {
    setVisible(!visible);
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    console.log('values in the form', values);
    try {
      await dispatch(SignUpThunk(values)).unwrap();
      toast.success('Registered successfully');
    } catch (error) {
      toast.error('Registration failed');
    }

    resetForm();
  };

  return (
    <RegistrationFormStyled>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={authValidationSchema}
      >
        {formik => (
          <Form autoComplete={'off'}>
            <FormTitle />
            <AuthController
              control="input"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
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

            <AuthButton>Register Now </AuthButton>
          </Form>
        )}
      </Formik>
    </RegistrationFormStyled>
  );
}

export default RegistrationForm;
