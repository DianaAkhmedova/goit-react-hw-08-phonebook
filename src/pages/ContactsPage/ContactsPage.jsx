import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import { PhonebookContainer } from 'pages/HomePage/HomePage.styled';
import { ContactsTitle } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PhonebookContainer>
        <ContactsTitle>My contacts</ContactsTitle>
        <Filter />
        {filteredContacts.length > 0 ? (
          <ContactList />
        ) : (
          <p>The contact list is empty...</p>
        )}
      </PhonebookContainer>
    </>
  );
};

export default ContactsPage;
