import React, { useState } from 'react'
import{Formik,Form} from 'formik';
import *as Yup from 'yup';
import { AuthButton } from 'components/common/authButton/AuthButton';
import AuthController from './authControll';
import { RegistrationFormStyled } from './RegistrationFormStyled';
import FormTitle from 'components/common/authTitle/AuthTitle';
// import Eyesvg from './Eyesvg';


function RegistrationForm({getData}) {

  const [userData, setUserData]=useState({})
    const initialValues={
        name:'',
        email:'', 
        password:'',  
        
     };
     const onSubmit=(values,{resetForm})=>{
         
         
         setUserData(values);
         console.log(userData);
         getData(userData)
         resetForm();
         
     };
     const validationSchema=Yup.object({
        name:Yup.string().required('name is required').min(2).max(32),
        email:Yup.string().required('email is required').email('Invalid email address'),
        password:Yup.string().required('password is required').min(8).max(64),
        
     })
 
  return (
< RegistrationFormStyled>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {formik=><Form autoComplete={'off'}>
        <FormTitle title="Registration" subtitle="Log In" name='register'/>
        <AuthController control='input' type='text' placeholder='Enter your name' name='name' />
        <AuthController control='input' type='email' placeholder='Enter your email' name='email'/>
        <AuthController control='input' type='password' placeholder='Enter your password' name='password'/>
        {/* <Eyesvg/> */}
        <AuthButton >Register Now </AuthButton>
         </Form>}
</Formik>
</ RegistrationFormStyled>
  )
}

export default RegistrationForm

