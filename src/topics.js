import React from 'react';
import './topics.css';


const topics = [
  'Sports',
  'Bollywood',
  'Politics',
  'Crime',
  'Arts',
  'Tech',
  'Olympics',
  'Paralympics',
  'Weather',
  'International',
  'Entertainment',
  'Finance',
  'Business',
  'Trade',
  'blah',
  'blah',
  'blah',
  'blah',
  'blah',
  'blah',
  'blah',
  'blah',
  'blah',
  'blah',

];

const Topics = () => {
  return (
    <div className="container">
      <h1 className="title">Choose topics you like</h1>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
