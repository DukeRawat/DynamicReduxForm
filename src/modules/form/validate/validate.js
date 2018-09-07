const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = 'Required';
    }
    if (!values.isIndiaCitizen) {
      errors.isIndiaCitizen = 'Required';
    }
    if (!values.Aadhaar) {
      errors.Aadhaar = 'Required';
    }
    if (!values.gender) {
      errors.gender = 'Required';
    }
    return errors;
  };
  
  export default validate;