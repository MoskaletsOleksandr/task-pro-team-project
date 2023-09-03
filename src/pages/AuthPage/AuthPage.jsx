import { useParams } from 'react-router-dom';
import RegistrationForm from 'components/registrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'pages/WelcomePage/WelcomePage.styled';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addGoogleInfo } from 'redux/auth/authSlice';
import { setToken } from 'api/axiosConfig';

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const user = searchParams.get('user');
    if (accessToken && refreshToken && user) {
      dispatch(addGoogleInfo({ accessToken, refreshToken, user }));
      setToken(`Bearer ${accessToken}`);
      localStorage.setItem('refreshToken',refreshToken)
    }
  }, [searchParams, dispatch]);

  const { id } = useParams();

  if (id === 'register') {
    return (
      <Container>
        <RegistrationForm />
      </Container>
    );
  }
  if (id === 'login') {
    return (
      <Container>
        <LoginForm />
      </Container>
    );
  }
};
export default AuthPage;
