import PropTypes from 'prop-types';
import LetteredAvatar from 'react-lettered-avatar';
import { useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import Button from 'shared/components/Button/Button';

import { ContactItem, ContactInfo } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, type }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <LetteredAvatar
        name={name}
        size={40}
        radius={50}
        color="#fff"
        backgroundColor="#00a2a9"
      />
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <Button onClick={() => dispatch(fetchDeleteContact(id))} type={type}>
        Delete
      </Button>
    </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
