import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const ResultsPage = () => {
  const feedbackData = [
  
    {
      name: 'General Website Evaluation',
      rating: 4,
    },
    {
      name: 'Ease of Navigation',
      rating: 3,
    },
    {
      name: 'Performance and Speed',
      rating: 5,
    },
    {
      name: 'Responsiveness on Mobile Devices',
      rating: 2,
    },
    {
      name: 'Most Useful Features',
      rating: 1,
    },
    {
      name: 'Visual Design and Brand Consistency',
      rating: 4,
    },
    {
      name: 'Browser Compatibility',
      rating: 3,
    },
    {
      name: 'Technical Errors',
      rating: 5,
    },
    {
      name: 'Suggested Improvements',
      rating: 2,
    },
  ];

  return (

    <div>
      <h1>Results Visualization</h1>
      <BarChart
        width={600}
        height={400}
        data={feedbackData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="rating" fill="rgba(75, 192, 192, 0.6)" label={{ position: 'top' }} />
      </BarChart>
    
    </div>

  );
}

export default ResultsPage;
