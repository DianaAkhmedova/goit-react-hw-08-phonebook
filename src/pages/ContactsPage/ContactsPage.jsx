import { useSelector } from 'react-redux';

import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

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
