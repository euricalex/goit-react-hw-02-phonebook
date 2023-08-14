import { ButtonDelete, ContactItem, ContactListstyles } from './Formstyle/Formstyle';

const ContactList = ({ filteredContacts, onRemove }) => {
  return (
    <ContactListstyles>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id}  contact={contact}
        onRemove={onRemove}>
          Name: {contact.name}
          <p>Number: {contact.number}</p>
          <ButtonDelete onClick={() => onRemove(contact.id)}>Delete</ButtonDelete>
        </ContactItem>
      ))}
    </ContactListstyles>
  );
};

export default ContactList;
