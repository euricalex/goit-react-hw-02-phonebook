import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

import Filter from './Filter';
import { PhoneBooks } from './Formstyle/Formstyle';

class App extends Component {
  state = {
    contacts: [
{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
{ id: 'id-5', name: 'Dimon Oleksenko', number: '666-66-66' },
{ id: 'id-6', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-7', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };
  componentDidMount() {
    console.log('component');
    const savedContacts = localStorage.getItem('contacts');
    if(savedContacts !== null) {
 this.setState ({
  contacts: JSON.parse(savedContacts)
 });
      

    }

  }
componentDidUpdate(prevProps, prevState) {
  if(prevState.contacts !== this.state.contacts) {
   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}
addContact = (newContact) => {
  const { contacts } = this.state;
  const lowerCaseName = newContact.name.toLowerCase(); // Приводимо до нижнього регістру
  
  const isDuplicate = contacts.some((contact) =>
    contact.name.toLowerCase() === lowerCaseName
  );

  if (isDuplicate) {
    alert('This contact already exists!');
  } else {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  }
};


removeContact = (contactID) => {
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter((contact) => contact.id !== contactID)
  }));
}
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    console.log('render')
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <PhoneBooks>
        <h1>Phonebook</h1>
        <ContactForm onContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterValue={filter} onFilterChange={this.handleFilterChange} />
        <ContactList filteredContacts={filteredContacts} onRemove={this.removeContact}  />
      </PhoneBooks>
    );
  }
}

export default App;


