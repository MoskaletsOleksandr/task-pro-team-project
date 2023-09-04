import * as Yup from 'yup';

export const authValidationSchema = Yup.object({
  name: Yup.string().required('name is required').min(2).max(32),
  email: Yup.string()
    .required('email is required')
    .email('Invalid email address'),
  password: Yup.string().required('password is required').min(8).max(64),
});

export const authLoginValidationSchema = Yup.object({
  email: Yup.string()
    .required('email is required')
    .email('Invalid email address'),
  password: Yup.string().required('password is required').min(8).max(64),
});

export const UpdateUserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'Email error',
      excludeEmptyString: true,
    }),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^[a-zA-Z0-9]+$/, {
      message: 'Password error',
      excludeEmptyString: true,
    }),
});
