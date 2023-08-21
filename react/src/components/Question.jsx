// src/components/Question.js
import React from 'react';

const Question = ({ question, onChange }) => {
  return (
    <div>
      <p>{question.text}</p>
      <input type="range" min="1" max="5" value={question.answer} onChange={onChange} />
    </div>
  );
}

export default Question;
