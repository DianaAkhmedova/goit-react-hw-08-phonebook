import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

const Button = ({ children, type = 'submit', onClick }) => {
  return (
    <Btn onClick={onClick} type={type}>
      {children}
    </Btn>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};
