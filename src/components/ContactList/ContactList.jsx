
import PropTypes from 'prop-types';
import {ContactItem} from './ContactItem';

const ContactList = ({ contacts,filter }) => {
  return (
    <ul>
      {contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
       
        .map(contact => {
          const { id } = contact;
          return (
            <ContactItem
              key={id}
              contact={contact}
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
export default ContactList;