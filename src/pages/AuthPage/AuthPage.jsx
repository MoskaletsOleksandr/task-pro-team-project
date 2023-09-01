import { useNavigate, useParams } from 'react-router-dom';
import RegistrationForm from 'components/registrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'pages/WelcomePage/WelcomePage.styled';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SignInThunk, SignUpThunk } from 'redux/thunks';
import { toast } from 'react-hot-toast';

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const [userData, setUserData] = useState({});

  const getUserData = data => {
    setUserData(data);
  };

  useEffect(() => {
    if (id === 'login') {
      try {
        dispatch(SignInThunk(userData))
          .unwrap()
          .then(data => {
            console.log(data);
            if (data) {
              toast.success('Logged In successfully');
              navigate('/home');
            }
           
          });
      } catch (error) {
        toast.error('Login failed');
        console.log(error);
      }
    } else {
      try {
        const response = dispatch(SignUpThunk(userData))
          .unwrap()
          .then(data => {
            if (data) {
              toast.success('Registered successfully');
              navigate('/home');
            }
          });
        console.log(response);
      } catch (error) {
        console.log('Registration failed');
      }
    }
  }, [userData, id, dispatch, navigate]);

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
