import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();
  if (id === 'register') {
    return <RegisterForm />;
  }
  if (id === 'login') {
    return <LoginForm />;
  }
};
export default AuthPage;
