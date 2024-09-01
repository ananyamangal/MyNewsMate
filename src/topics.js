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
       <header className="navbar">
            <nav className="navbar">
        <div className="navbar-left">
            <a href="#">Home</a>
            <a href="#">Choose Avatar</a>
            <a href="#">News</a>
        </div>
        <div className="navbar-right">
            <a href="#">Login/Signup</a>
        </div>
    </nav>
    </header>
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
