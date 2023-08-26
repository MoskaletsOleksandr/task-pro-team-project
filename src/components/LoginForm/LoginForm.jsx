import React from 'react'
import{Formik,Form} from 'formik';
import *as Yup from 'yup';
import { AuthButton } from 'components/common/authButton/AuthButton';
import AuthController from 'components/registrationForm/authControll';
import { RegistrationFormStyled } from 'components/registrationForm/RegistrationFormStyled';
import FormTitle from 'components/common/authTitle/AuthTitle';


function LoginForm() {
    const initialValues={
        
        email:'', 
        password:'',  
        
     };
     const onSubmit=(values,{resetForm})=>{
         console.log(values);
         resetForm();
         
     };
     const validationSchema=Yup.object({
       
        email:Yup.string().required('email is required').email('Invalid email address'),
        password:Yup.string().required('name is required'),
        
     })
 
  return (
< RegistrationFormStyled>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {formik=><Form>
        <FormTitle title="Registration" subtitle="Log In"/>
       
        <AuthController control='input' type='email' placeholder='Enter your email' name='email'/>
        <AuthController control='input' type='password' placeholder='Enter your password' name='password'/>
        <AuthButton >Register Now </AuthButton>
         </Form>}
</Formik>
</ RegistrationFormStyled>
  )
}

export default LoginForm
