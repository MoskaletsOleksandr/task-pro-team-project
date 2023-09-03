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
import { GoogleButton } from 'components/common/GoogleButton/GoogleButton';
// import { useSearchParams } from 'react-router-dom';

function RegistrationForm() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  // const [searchParams] = useSearchParams();

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
  // const fetchGoogle = () => {
  //   return fetch(("https://task-pro-group-1-backend.onrender.com/users/google"))
  //     .then(response => {
  //       console.log(response)})
  //       .catch(error=>console.log(error))
  // };

  // const handleGoogleClick=(e)=>{
   
    // fetchGoogle();
     
    // console.log("click on Google Button", e)
    // const accessToken=searchParams.get('accessToken');
    // console.log(accessToken)
    // const refreshToken=searchParams.get('refreshToken');
    // console.log(refreshToken)
    // const user=searchParams.get('user');
    // console.log(user)
  // }

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
            <GoogleButton />
          </Form>
        )}
      </Formik>
    </RegistrationFormStyled>
  );
}

export default RegistrationForm;
