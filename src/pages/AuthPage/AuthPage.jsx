import { useNavigate, useParams } from 'react-router-dom';
import RegistrationForm from 'components/registrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'pages/WelcomePage/WelcomePage.styled';
// import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  SignInThunk, SignUpThunk } from 'redux/thunks';
// import { AuthButton } from 'components/common/authButton/AuthButton';

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const [userData, setUserData] = useState({});

  const getUserData = data => {
    console.log('data in AuthPage', data);
    setUserData(data);
  };

  // const onClick =  e => {
  //   console.log(e)
  //   try {
  //     dispatch(LogOutThunk());
  //   } catch (error) 
  //   {console.log(error)}
  // };

  useEffect(() => {
    if (id === 'login') {
      try {
        dispatch(SignInThunk(userData))
          .unwrap()
          .then(data => {
            console.log(data);
            if (data) {

              navigate('/home');
            }
          });
      } catch (error) {
        console.log('registration failed');
      }
    } else {
      try {
        const response = dispatch(SignUpThunk(userData))
          .unwrap()
          .then(data => {
            if (data) {
              navigate('/home');
            }
          });
        console.log(response);
      } catch (error) {
        console.log('Logged in failed');
      }

    }
  }, [userData, id, dispatch,navigate]);

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
        {/* <AuthButton  onClick={onClick}>
          Log out
        </AuthButton> */}
      </Container>
    );
  }
};
export default AuthPage;
