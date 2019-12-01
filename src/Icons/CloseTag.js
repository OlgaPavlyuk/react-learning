import React from 'react';

const CloseTag = (props) => {
  const { width, height } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" width={width} height={height}>
      <path fill="#000000" d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2.625 7.575l-1.05 1.05L6 7.05 4.425 8.625l-1.05-1.05L4.95 6 3.375 4.425l1.05-1.05L6 4.95l1.575-1.575 1.05 1.05L7.05 6l1.575 1.575z"/>
    </svg>
  );
}

export default CloseTag;
