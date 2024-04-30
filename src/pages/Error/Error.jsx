import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">Oops! Page Not Found</h1>
        <p className="error-message">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <button className="error-button" onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  );
};

export default Error;
