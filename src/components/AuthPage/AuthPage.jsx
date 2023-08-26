import { useParams } from 'react-router-dom';
import RegistrationForm from 'components/registrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'components/WelcomePage/WelcomePage.styled';

const AuthPage = () => {
  const { id } = useParams();
  
  if (id === 'register') {
    return <Container><RegistrationForm/></Container>;
  }
  if (id === 'login') {
    return <Container><LoginForm/></Container>;
  }
};
export default AuthPage;
