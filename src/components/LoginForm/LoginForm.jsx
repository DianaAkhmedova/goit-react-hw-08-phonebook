import PropTypes from 'prop-types';

import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';
import Form from 'shared/components/Form/Form';

import useForm from 'shared/hooks/useForm';

import initialState from './initialState';
import fields from './fields';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
