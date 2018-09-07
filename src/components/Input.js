import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import getValidationState from './getValidationState';

export default props => {
  const { input, type, meta, label, placeholder } = props;

  return (
    <FormGroup validationState={getValidationState(meta)}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type={type} {...input} placeholder={placeholder}/>
      {meta.touched && meta.error}
      <FormControl.Feedback />
    </FormGroup>
  );
};