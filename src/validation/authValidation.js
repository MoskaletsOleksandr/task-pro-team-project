import * as Yup from 'yup';

export const authValidationSchema=Yup.object({
    name: Yup.string().required('name is required').min(2).max(32),
    email: Yup.string()
      .required('email is required')
      .email('Invalid email address'),
    password: Yup.string().required('password is required').min(8).max(64),
  });


  export const authLoginValidationSchema=Yup.object({
    email: Yup.string()
      .required('email is required')
      .email('Invalid email address'),
    password: Yup.string().required('password is required').min(8).max(64),
  });

