import React from 'react';
import './topics.css';

const handleAvatarClick = () => {
  window.location.href = 'http://localhost:3001/haha';
};

const topics = [
  'Sports', 'Bollywood', 'Politics', 'Crime', 'Arts', 'Tech', 'Olympics', 
  'Paralympics', 'Weather', 'International', 'Entertainment', 'Finance',
  'Business', 'Economics', 'Geopolitics', 'Israel-Hamas War', 
  'Russia-Ukraine War', 'Emerging Entrepreneurs', 'College Admissions',
  'Exam Results', 'Latest Updates', 'Climate Change', 'Sustainability', 'Green Tech'
];

const Topics = () => {
  return (
    <div className="container">
       <header className="navbar">
            <nav className="navbar">
        <div className="navbar-left">
        <a href="/">Home</a>
          <a href="haha">Choose Avatar</a>
          <a href="/hehe">News</a>
        </div>
        <div className="navbar-right">
            <a href="#">Login/Signup</a>
        </div>
    </nav>
    </header>
      <h1 className="title">Choose topics you like</h1>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card" onClick={handleAvatarClick}>
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
