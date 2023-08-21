import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div>
      <h1>Thank You for Your Feedback!</h1>
      <p>Your feedback has been successfully submitted.</p>
      <Link to="/results">View Results</Link>
      <Link to="/">Home Page </Link>

    </div>
  );
}

export default ThankYouPage;
