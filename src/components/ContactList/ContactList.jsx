
import PropTypes from 'prop-types';
import {ContactItem} from './ContactItem';
import {Ul} from './ContactList.styled';

export const ContactList = ({ contacts,filter,deleteContact }) => {
  return (
    <Ul>
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
    </Ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter:PropTypes.string.isRequired,
};