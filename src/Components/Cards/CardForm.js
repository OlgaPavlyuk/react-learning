import React, { useState } from 'react';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import { addCard } from '../../store/actions/cardsActions';
import './cardForm.css';

const mapDispatchToProps = (dispatch) => ({
  addCard: (card) => dispatch(addCard(card)),
});

const CardForm = (props) => {
  const blankCard = { front: '', back: '', tags: [] };
  const [newCard, setNewCard] = useState(blankCard);

  const onFormSubmit = (e) => {
    e.preventDefault();
    /* todo
      use uuid?
      get last item from state.allIds and increment it?
      check, if id exists in state.allIds?  */
    const id = uniqueId();
    const payload = { id, ...newCard, lastRepeat: '' };
    props.addCard(payload);
    setNewCard({ ...blankCard });
  };

  const onChangeHandle = ({ target }) => {
    const { name, value } = target;
    let newValue = value;
    if (name === 'tags') {
      newValue = value.split(',');
    }
    setNewCard({ ...newCard, [name]: newValue });
  };

  return (
    <form className="card-form" onSubmit={onFormSubmit}>
      <div className="input__wrapper">
        <input
          type="text"
          placeholder="Front"
          name="front"
          value={newCard.front}
          className="input-text"
          onChange={onChangeHandle}
        />
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          placeholder="Back"
          name="back"
          className="input-text"
          value={newCard.back}
          onChange={onChangeHandle}
        />
      </div>
      <div className="input__wrapper">
        <input type="text"
          placeholder="Tags"
          name="tags"
          value={newCard.tags}
          className="input-text"
          onChange={onChangeHandle}
        />
      </div>
      <input type="submit" value="Add Card" className="btn btn-primary" />
    </form>
  );
};

export default connect(null, mapDispatchToProps)(CardForm);
