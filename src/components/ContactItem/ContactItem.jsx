import React from 'react';
import PropTypes from 'prop-types';
import { Item, Text, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <Item>
    <Text>
      {name}: {number}
    </Text>
    <Button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </Button>
  </Item>
);

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
