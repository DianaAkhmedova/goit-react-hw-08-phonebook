import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';
import Form from 'shared/components/Form/Form';

import useForm from 'shared/hooks/useForm';

import initialState from './initialState';
import fields from './fields';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </Form>
  );
};

export default RegisterForm;
