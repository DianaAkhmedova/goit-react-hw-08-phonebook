import PropTypes from 'prop-types';
import { StyledForm } from './Form.styled';

const Form = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
};
