import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const id = nanoid();
    const number = form.elements.number.value;
    const name = form.elements.name.value;
    const contactObj = { id, name, number };
    const contacts = this.state.contacts;

    for (const contact of contacts) {
      if (contact.name === name) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contactObj] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { name, number, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        {/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
        ></input>
        <ul>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                type="button"
                onClick={() => this.deleteContact(contact.id)}
              >
                Delete contact
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
