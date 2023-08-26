import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div>
      <Link to="/auth/register">Register</Link>
      <Link to="/auth/login">Login</Link>
      <form>
        <input type="text" />
        <input type="text" />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default LoginForm;