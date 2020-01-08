import React from 'react';
import useForm from './useForm';
import FormInput from './FormInput';

const CardForm = (props) => {
  const initialState = {
    front: '',
    back: '',
    tags: [],
  };

  const {
    useInput,
    isValid,
    showMessage,
    handleSubmit,
  } = useForm(initialState, { error: true, clsName: 'is-error' }, props.onSubmit);

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      {showMessage && <div className="card-from__message">A new card is added to somewhere!</div>}
      <FormInput
        placeholder='Front'
        message='Front text is required'
        {...useInput('front', 'isRequired')}
      />
      <FormInput
        placeholder='Back'
        message='Back text is required'
        {...useInput('back', 'isRequired')}
       />
      <FormInput
        placeholder='Tags'
        {...useInput('tags', '')}
      />
      <input type="submit" disabled={!isValid} value="Add Card" className="btn btn-primary" />
    </form>
  );
};

export default CardForm;
