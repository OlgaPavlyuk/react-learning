import React, { useState } from 'react';

function Card(props) {
  const [ rotate, setRotate ] = useState('front');
  const classes = `card ${rotate}`;

  const rotateCard = (e) => {
    return setRotate(rotate === 'front' ? 'back' : 'front');
  }

  const { front, back } = props.data;

  return (
    <div className={ classes } onClick={ rotateCard }>
      <div className="front text">{front}</div>
      <div className="back text">{back}</div>
    </div>
  );
};

export default Card;
