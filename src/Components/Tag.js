import React from 'react';
import CloseTag from '../Icons/CloseTag';

/* function in props insteed of 'removing' for render close btn? */
/* how to do not fixed width and height for icon? */

const Tag = ({ title, removing }) => (
  <div className="tag">
    <span className="tag__text">{title}</span>
    { removing && <button className="tag__btn"><CloseTag width="12" height="12"/></button> }
  </div>
);

export default Tag;
