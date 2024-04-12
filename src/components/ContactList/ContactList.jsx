import css from './ContactList.module.css';
import Contact from "../Contact/Contact";


const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDelete = id => {
    onDeleteContact(id);
  };

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact {...contact} />
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;