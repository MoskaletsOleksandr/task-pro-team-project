import { useParams } from 'react-router-dom';
import RegistrationForm from 'components/registrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'components/WelcomePage/WelcomePage.styled';
import axios from 'axios';
import { useState,useEffect } from 'react';

const instance = axios.create({
  baseURL: 'https://task-pro-group-1-backend.onrender.com',
});

const signUp = async body => {
  try {
    const response = await instance.post('users/register', body);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const login = async body => {
  const response = await instance.post('users/login', body);
  console.log(response.data);
  return response.data;
};

const AuthPage = () => {
  const { id } = useParams();
  const[userData, setUserData]=useState({});

  const getUserData = data => {
    console.log('data in AuthPage');
    setUserData(data)
  };

  useEffect(()=>{
    if (id === 'login') {
            login(userData);
          } else {
            signUp(userData);
          }
  },[userData,id])
  

 
  if (id === 'register') {
    return (
      <Container>
        <RegistrationForm getData={getUserData} />
      </Container>
    );
  }
  if (id === 'login') {
    return (
      <Container>
        <LoginForm getData={getUserData} />
      </Container>
    );
  }
};
export default AuthPage;
