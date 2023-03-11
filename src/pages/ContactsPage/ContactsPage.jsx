import { useSelector } from 'react-redux';

import Filter from 'modules/Filter/Filter';
import ContactList from 'modules/ContactList/ContactList';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import { PhonebookContainer, ContactsTitle } from '../../App.styled';

const ContactsPage = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      <PhonebookContainer>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {filteredContacts.length > 0 && <ContactList />}
      </PhonebookContainer>
    </>
  );
};

export default ContactsPage;
