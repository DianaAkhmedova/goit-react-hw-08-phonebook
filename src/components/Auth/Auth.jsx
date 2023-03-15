import { Link } from './Auth.styled';

const Auth = () => {
  return (
    <div>
      <Link to={'/register'}>Register</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  );
};

export default Auth;
