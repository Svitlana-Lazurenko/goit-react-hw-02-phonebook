import React from 'react';
import PropTypes from 'prop-types';
import { Label, Text, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    <Text>Find contacts by name</Text>
    <Input type="text" name="filter" value={value} onChange={onChange}></Input>
  </Label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
