const mockConfigData = 
  {
    name: 'applicant',
    caption: 'Applicant Information',
    fields: [
      {
        name: 'firstName',
        component: 'input',
        caption: 'First name*',
        initialValue: 'Durgesh',
        validationRule: '^(?!\\s*$).+',
        type: 'text'
      },
      {
        name: 'lastName',
        component: 'input',
        caption: 'Last Name*',
        initialValue: 'Rawat',
        validationRule: '^.{6,}$'
      },
      {
        name: 'middleName',
        component: 'input',
        caption: 'Middle Name',
        initialValue: 'Kumar'
      },
      {
        name: 'dateOfBirth',
        component: 'input',
        type: 'date',
        caption: 'Date of Birth*',
        initialValue: '26/07/1988'
      },
      {
        name: 'gender',
        component: 'radio',
        caption: 'Gender',
        options: [
          { value: 'MALE', title: 'Male' },
          { value: 'FEMALE', title: 'Female' }
        ],
        initialValue: 'MALE'
      },
      {
        name: 'isIndiaCitizen',
        component: 'radio',
        caption: 'Is Citizen of India*',
        options: [
          { value: 'TRUE', title: 'YES' },
          { value: 'FALSE', title: 'NO' }
        ],
        initialValue: undefined
      },
      {
        name: 'Aadhaar',
        component: 'input',
        caption: 'Aadhaar*',
        initialValue: '9684-1552-2551'
      },
      {
        name: 'maritalStatus',
        component: 'select',
        caption: 'Marital Status',
        options: [
          { value: 'SINGLE', title: 'Single' },
          { value: 'MARRIED', title: 'Married' },
          { value: 'DIVORCED', title: 'Divorced' },
          { value: 'WIDOW', title: 'Widow' },
          { value: 'SEPARATED', title: 'Separated' }
        ],
        initialValue: 'SINGLE'
      }
    ],
    subSectionFields: [
      {
        name: 'addressLine1',
        component: 'input',
        caption: 'Address Line 1',
        initialValue: 'Address Line 1'
      },
      {
        name: 'addressLine2',
        component: 'input',
        caption: 'Address Line 2',
        initialValue: 'Address Line 1'
      },
      {
        name: 'city',
        component: 'input',
        caption: 'City',
        initialValue: 'City'
      },
      {
        name: 'state',
        component: 'input',
        caption: 'state',
        initialValue: 'State'
      },
      {
        name: 'zip',
        component: 'input',
        caption: 'Zip',
        initialValue: 'ZIP Code',
        type: 'number'
      },
      {
        name: 'monthOfMove',
        component: 'input',
        caption: 'Month/Year of move there',
        type: 'month',
        initialValue: 'YYYY-MM'
      },
      {
        name: 'type',
        component: 'radio',
        caption: 'Type',
        options: [
          { value: 'OWNED', title: 'Owned' },
          { value: 'RENTED', title: 'Rented' },
          { value: 'OTHER', title: 'Other' }
        ],
        initialValue: 'OWNED'
      }
    ]
  }
;

export default mockConfigData;
