import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const ContactItem = function ({ contact, handleDelete }) {
  return (
    <ItemStyled>
      <span>{contact.name}:</span> <span>{contact.number}</span>
      <button
        style={{ backgroundColor: 'tomato', border: '0', borderRadius: '5px', width: '150px', height: '30px'}}
        type="button"
        name="deleteBtn"
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </ItemStyled>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactItem;