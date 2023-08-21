// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Feedback Quiz</h1>
      <p>Here you can evaluate our service. Your opinion is very important to us!  </p>
      <Link className="Leavefeed" to="/feedback">Leave Feedback</Link> {/* Adicione um link para a página de feedback */}
    </div>
  );
}

export default Home;
