import './App.css';
import { useState } from 'react';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import data from '../data/contactList.json';

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [filter, setFilter] = useState('');

  const handleFilterChange = value => {
    setFilter(value);
  };

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
    };
    
    const handleDeleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    
    return (
    <div>
    <h1>Phonebook</h1>
    <h2>Add New Contact</h2>
    <ContactForm onSubmit={handleAddContact} />
    <SearchBox onChange={handleFilterChange} />
    <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} /> 
    </div>
  );
};

export default App;
