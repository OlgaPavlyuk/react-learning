import React from 'react';

const FormInput = (props) => {
  const { name, placeholder, value, onChange, onBlur, onFocus, error, clsName, message } = props;
  return (
    <div className="input__wrapper">
      <div>{error}</div>
      {error && <div className='input-error'>{message}</div>}
      <input
        type="text"
        autoComplete='off'
        placeholder={placeholder}
        name={name}
        value={value}
        className={`input-text ${clsName}`}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default FormInput;
