import React from 'react';

function ErrorMessage (props) {
  const { message } = props;
  
  return (
    <div className="error">
      { message }
    </div>
  );
}

export default ErrorMessage;
