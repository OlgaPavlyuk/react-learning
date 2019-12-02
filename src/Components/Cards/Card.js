import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import Tag from '../Tag';
import './card.css';

function Card(props) {
  const [ rotate, setRotate ] = useState('front');
  const classes = `card ${rotate}`;

  const rotateCard = () => {
    return setRotate('back');
  }

  const renderTags = (tag) => <Tag title={tag} key={uniqueId()} />;

  const { front, back, theme, id } = props.data;

  return (
    <div className="card-container" >
      <div className={ classes }>
        <div className="card__inner">                   
          <div className="card__text front">{front}</div>
          <div className="card__text back">{back}</div>
          <button className="btn btn-inverse btn-small front" onClick={ rotateCard }>Flip</button>
          <div className="btn__wrapper">
            <button className="btn btn-inverse btn-small back" onClick={ () => { props.updateData(id, "false") } }>Repeat</button>
            <button className="btn btn-primary btn-small back" onClick={ () => { props.updateData(id, "true") } }>I know</button>
          </div>
          <div className="tag__wrapper">
            { theme.map(renderTags) }
          </div> 
        </div>
      </div>      
    </div>
  );
};

export default Card;
