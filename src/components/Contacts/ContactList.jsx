import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ContactItem from './ContactItem';

const ListSlyled = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
`;

const ContactList = ({ contacts, filter, handleDelete }) => {
  return (
    <ListSlyled>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
      )
        .map((contact, idx) => {
          return (
            <li key={idx}>
              <ContactItem contact={contact} handleDelete={handleDelete} />
            </li>
          );
          })}
    </ListSlyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;