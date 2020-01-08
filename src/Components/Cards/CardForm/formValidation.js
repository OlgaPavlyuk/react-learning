// import validator from 'validator';

const validate = (value, validation) => {
  switch (validation) {
    case 'isRequired':
      return !(value === '');
    case '':
      return true;
    default:
      return null;
  }
};

export default validate;
