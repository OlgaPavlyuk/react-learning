import React from 'react';
import MainContent from './MainContent';

function ErrorMessage (props) {
  const { message } = props;
  
  function onCloseError() {
    console.log('close error');
  }

  return (
    <div className="error">
      { message }
    </div>
  );
}

export default ErrorMessage;
