import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Block, MainTitle, Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const id = nanoid();
    const contactObj = { id, name, number };
    const contacts = this.state.contacts;
    const newNormalizedName = name.toLowerCase();

    for (const contact of contacts) {
      const oldNormalizedName = contact.name.toLowerCase();
      if (oldNormalizedName === newNormalizedName) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    this.setState(({ contacts }) => ({
      contacts: [contactObj, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Block>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addContact} />

        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Block>
    );
  }
}

export default App;
