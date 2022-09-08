import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38044-459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38055-443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+38066-645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38077-227-91-26' },
    ]
  });

  const [filter, setFilter] = useState('');

  const createContact = (name, number) => {
    return { name, number, id: nanoid() };
  }
  
  const isIncludes = newName => {
    return contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    )
      ? true
      : false;
  };

  const addContact = contact => {
    setContacts(prevState => {
      return [contact, ...prevState];
    });
  };

  const handleDelete = contactId => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== contactId))
    )
  };

  const formSubmitHandler = ({ name, number }) => {
    !isIncludes(name)
      ? addContact(createContact(name, number))
      : alert(`${name} is already in contacts`);
  };

  const handleFilter = filterText => {
    setFilter(filterText);
  };

  useEffect((prevState) => {
    if (contacts !== prevState) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div
      style={{ width: '600px', fontSize: '12px', }}
    >
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDelete={handleDelete}
      />
    </div>
  );
};