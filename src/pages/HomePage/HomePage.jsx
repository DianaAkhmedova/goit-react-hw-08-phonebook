import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ContactForm from 'components/ContactForm/ContactForm';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { fetchAddContact } from 'redux/contacts/contacts-operations';

import { PhonebookContainer, PhonebookTitle } from '../../App.styled';

const HomePage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleAddContact = contact => {
    dispatch(fetchAddContact(contact));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {!isLogin ? (
        <div style={{ textAlign: 'center' }}>
          If you want to use the Phonebook,{' '}
          <Link to={'/register'}>register</Link> or{' '}
          <Link to={'/login'}>login</Link>
        </div>
      ) : (
        <PhonebookContainer>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm onSubmit={handleAddContact} />
        </PhonebookContainer>
      )}
    </>
  );
};

export default HomePage;
