import { useSelector } from 'react-redux';

import ContactListItem from './ContactListItem/ContactListItem';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const sortedContacts = [...contacts].sort((firstName, secondName) =>
    firstName.name.localeCompare(secondName.name)
  );

  const contactsItem = sortedContacts.map(({ id, name, number }) => (
    <ContactListItem
      key={id}
      id={id}
      name={name}
      number={number}
      type="button"
    />
  ));
  return <ul>{contactsItem}</ul>;
};
export default ContactList;
