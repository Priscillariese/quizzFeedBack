// src/pages/Feedback.js
import React, { useState } from 'react';
import Question from '../components/Question';
import CommentBox from '../components/CommentBox';
import { Link, useNavigate } from 'react-router-dom';


const Feedback = () => {
     const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "General Website Evaluation",
      answer: 3
    },
    {
      id: 2,
      text: "Ease of Navigation",
      answer: 3
    },
    {
      id: 3,
      text: "Performance and Speed",
      answer: 3
    },
    {
        id: 4,
        text: "Responsiveness on Mobile Devices",
        answer: 3
      },
      {
        id: 5,
        text: "Most Useful Features",
        answer: 3
      },
      {
        id: 6,
        text: "Visual Design and Brand Consistency",
        answer: 3
      },
      {
        id: 7,
        text: "Browser Compatibility",
        answer: 3
      },
      {
        id: 8,
        text: "Technical Errors",
        answer: 3
      },
      {
        id: 9,
        text: "Suggested Improvements",
        answer: 3
      }

  ]);
 


  const handleAnswerChange = (questionId, newValue) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === questionId ? { ...question, answer: newValue } : question
      )
    );
  };



  const handleSubmitFeedback = () => {
    navigate('/thank-you');
  };

  return (
    <div>
      <h1>Leave Your Feedback</h1>
      {questions.map(question => (
        <Question
          key={question.id}
          question={question}
          onChange={(event) => handleAnswerChange(question.id, event.target.value)}
        />
      ))}
      <CommentBox />
      <button onClick={handleSubmitFeedback}>Submit Feedback</button>
      <Link to="/results">View results</Link>
    </div>
  );
}

export default Feedback;
