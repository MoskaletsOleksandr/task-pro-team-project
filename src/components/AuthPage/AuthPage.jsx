import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();
  if (id === 'register') {
    return <></>;
  }
  if (id === 'login') {
    return <></>;
  }
};
export default AuthPage;
