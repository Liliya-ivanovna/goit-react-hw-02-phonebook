import PropTypes from 'prop-types';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;

  return (
    <li>
      <span>{name}</span>
      <span> {number}</span>
    
    </li>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};