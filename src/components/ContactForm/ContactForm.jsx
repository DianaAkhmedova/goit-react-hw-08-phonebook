import useForm from 'shared/hooks/useForm';

import TextField from 'shared/components/TextField/TextField';
import { Btn } from 'shared/components/Button/Button.styled';

import { Form, FormLabel, FormInput } from './ContactForm.styled';

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

      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};
export default ContactForm;
