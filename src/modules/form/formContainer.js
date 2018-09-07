import React from 'react';
import { reduxForm } from 'redux-form';
import FormComponent from './formComponent';
import validate from './validate/validate';
import asyncValidate from './validate/asyncValidate';

export const FormContainer = ({ handleSubmit, pristine, submitting, reset }) => {
  const submitForm = (formValues) => {
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    console.log('submitting Form: ', formValues);
    window.location.reload();
  };
  return (
    <FormComponent
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
      pristine={pristine}
      submitting={submitting}
      reset={reset}
    />
  );
};
const formConfiguration = {
  form: 'User Information' ,
  validate ,
  asyncValidate,
  asyncChangeFields: ['firstName','lastName','middleName'],
  asyncBlurFields: ['firstName','lastName','Aadhaar']
};
export default reduxForm(formConfiguration)(FormContainer);