import { Component } from 'react';
import { PhoneBook } from './Phonebook';

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
  filter: ""
  };

  addContact = newContact => {
    console.log(newContact);
    // Додати новий контакт до списку контактів у стані
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };
  handleFilterChange = (event) => {
    this.setState({filter: event.target.value });
  };

  render() {
  const { contacts, filter } = this.state;

  // Фильтрация контактов по имени
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
    return (
      <div>
        <PhoneBook onContact={this.addContact} 
        contacts={this.state.contacts}
        filterContact = {filteredContacts}
        filterValue ={filter}
        onFilterChange = {this.handleFilterChange}
         />

      </div>
    );
  }

}
export default App;

