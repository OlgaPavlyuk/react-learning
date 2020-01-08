import React from 'react';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import { addCard } from '../../store/actions/cardsActions';
import CardForm from './CardForm/CardForm';
import './CardForm/cardForm.css';

const mapDispatchToProps = (dispatch) => ({
  addCard: (card) => dispatch(addCard(card)),
});

const AddCard = (props) => {
  const onFormSubmit = (data) => {
    /* todo
      use uuid?
      get last item from state.allIds and increment it?
      check, if id exists in state.allIds?  */
    const id = uniqueId();
    const { tags } = data;
    const tagsArray = tags.length > 0 ? tags.split(',') : [];

    const newCard = {
      id,
      ...data,
      tags: tagsArray,
      lastRepeat: '',
    };
    props.addCard(newCard);
  };

  return (
    <CardForm onSubmit={onFormSubmit} />
  );
};

export default connect(null, mapDispatchToProps)(AddCard);
