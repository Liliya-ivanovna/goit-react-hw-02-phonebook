
import PropTypes from 'prop-types';
import {ContactItem} from './ContactItem';

export const ContactList = ({ contacts,filter,deleteContact }) => {
  return (
    <ul>
      {contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
       
        .map(contact => {
          const { id } = contact;
          return (
            <ContactItem
              key={id}
              contact={contact}
              deleteContact={deleteContact}
              />
          );
        })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter:PropTypes.string.isRequired,
};