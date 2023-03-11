import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from 'modules/ContactForm/ContactForm';

import { fetchContacts } from 'redux/contacts/contacts-operations';

import { PhonebookContainer, PhonebookTitle } from '../../App.styled';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PhonebookContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
      </PhonebookContainer>
    </>
  );
};

export default HomePage;
