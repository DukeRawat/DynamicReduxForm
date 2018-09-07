const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const nameRegExp= RegExp('^[a-zA-Z ]{2,30}$');
const aadhaarRegExp=RegExp('^[0-9]{4}-[0-9]{4}-[0-9]{4}$');
const middleNameRegExp=RegExp('^([a-zA-Z ]{2,30})?$');
const asyncValidate = (values /*, dispatch */) => {
  return sleep(2000).then(() => {
    // simulate server latency
    if (['john', 'John', 'durgesh', 'Durgesh'].includes(values.firstName)) {
      throw { firstName: 'That username is taken' };
    }
    if(!nameRegExp.test(values.firstName)){throw { firstName: 'First Name Should contain only alphabets (min:2)' };}
    if(!nameRegExp.test(values.lastName)){throw { lastName: 'Last Name Should contain only alphabets (min:2)' };}
    if(!middleNameRegExp.test(values.middleName)){throw { middleName: 'Middle Name Should contain only alphabets (min:2) or empty' };}
    if(!aadhaarRegExp.test(values.Aadhaar)){throw { Aadhaar: 'Aadhaar should be in advised format' };}
  });
};

export default asyncValidate;