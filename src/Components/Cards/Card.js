import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import Tag from '../Tag';
import RotateIcon from '../../Icons/RotateIcon';
import './card.css';

function Card(props) {
  const { front, back, tags, id } = props.data;
  const [rotate, setRotate] = useState('front');
  const classes = `card ${rotate}`;

  const rotateCard = () => {
    setRotate(rotate === 'front' ? 'back' : 'front');
  };

  const renderTags = (tag) => <Tag title={tag} key={uniqueId()} />;

  const renderFront = () => (
    <div className="card__inner card__inner--front">
      <div className="card__text">{ front }</div>
      <button className="btn btn-inverse btn-small" onClick={ rotateCard }>Flip</button>
      <div className="tag__wrapper">
        { tags.map(renderTags) }
      </div>
    </div>
  );

  const renderBack = () => (
    <div className="card__inner card__inner--back">
      <button
        className="btn btn-inverse btn-small card__btn-flip"
        onClick={ rotateCard }
      >
        <RotateIcon width="22" height="22" />
      </button>
      <div className="card__text">{ back }</div>
      <div className="btn__wrapper">
        <button
          className="btn btn-inverse btn-small"
          onClick={() => {
            props.clickHandler(id, 'repeat');
          }}
        >
          Hard
        </button>
        <button
          className="btn btn-primary btn-small"
          onClick={() => {
            props.clickHandler(id, 'known');
          }}
        >
          Easy
        </button>
      </div>
      <div className="tag__wrapper">
        { tags.map(renderTags) }
      </div>
    </div>
  );

  return (
    <div className={ classes }>
      { renderFront() }
      { renderBack() }
    </div>
  );
}

export default Card;
