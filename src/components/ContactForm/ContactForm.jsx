import PropTypes from 'prop-types';

import useForm from 'shared/hooks/useForm';

import Form from 'shared/components/Form/Form';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';

import initialState from './initialState';
import fields from './fields';

const ContactForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, number } = state;

  return (
    <Form onSubmit={handleSubmit} name="contactForm" autoComplete="on">
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField
        value={number}
        handleChange={handleChange}
        {...fields.number}
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
