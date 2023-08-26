import React from 'react'
import{Formik,Form} from 'formik';
import *as Yup from 'yup';
import { AuthButton } from 'components/common/authButton/AuthButton';
import AuthController from './authControll';
import { RegistrationFormStyled } from './RegistrationFormStyled';
import FormTitle from 'components/common/authTitle/AuthTitle';

function RegistrationForm() {
    const initialValues={
        name:'',
        email:'', 
        password:'',  
        
     };
     const onSubmit=(values,{resetForm})=>{
         console.log(values);
         resetForm();
         
     };
     const validationSchema=Yup.object({
        name:Yup.string().required('name is required'),
        email:Yup.string().required('email is required').email('Invalid email address'),
        password:Yup.string().required('password is required').min(8).max(64),
        
     })
 
  return (
< RegistrationFormStyled>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {formik=><Form>
        <FormTitle active="Registration" inactive="Log In"/>
        <AuthController control='input' type='text' placeholder='Enter your name' name='name'/>
        <AuthController control='input' type='email' placeholder='Enter your email' name='email'/>
        <AuthController control='input' type='password' placeholder='Enter your password' name='password'/>
        
        <AuthButton >Register Now </AuthButton>
         </Form>}
</Formik>
</ RegistrationFormStyled>
  )
}

export default RegistrationForm

