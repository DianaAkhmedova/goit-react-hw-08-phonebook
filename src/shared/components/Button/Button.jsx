import { Btn } from './Button.styled';

const Button = ({ children, type = 'submit' }) => {
  return <Btn type={type}>{children}</Btn>;
};

export default Button;
