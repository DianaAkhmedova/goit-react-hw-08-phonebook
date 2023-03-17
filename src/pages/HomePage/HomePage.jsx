import { useSelector, useDispatch } from 'react-redux';
import { VisuallyHidden } from '@reach/visually-hidden';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

import { isUserLogin } from 'redux/auth/auth-selectors';
import { fetchAddContact } from 'redux/contacts/contacts-operations';

import {
  PhonebookContainer,
  PhonebookTitle,
  TextWrapper,
} from './HomePage.styled';
import { Link } from 'components/Auth/Auth.styled';

const HomePage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleAddContact = contact => {
    dispatch(fetchAddContact(contact));
  };

  return (
    <>
      {!isLogin ? (
        <TextWrapper>
          If you want to use the Phonebook,{' '}
          <Link to={'/register'} style={{ margin: 0 }}>
            register
          </Link>{' '}
          or <Link to={'/login'}>login</Link>
        </TextWrapper>
      ) : (
        <PhonebookContainer>
          <PhonebookTitle>Welcome to the Phonebook!</PhonebookTitle>
          <ContactForm onSubmit={handleAddContact} />
          <VisuallyHidden>
            <ContactsPage />
          </VisuallyHidden>
        </PhonebookContainer>
      )}
    </>
  );
};

export default HomePage;
