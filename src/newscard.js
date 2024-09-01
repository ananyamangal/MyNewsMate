import React from 'react';
import './NewsCard.css';
import image2 from "./assets/Screenshot_2024-09-01_at_1.32.02_PM-removebg-preview.png"

const NewsCard = () => {
  return (
    
    <div className="news-container">
        <img src={image2 }alt="News Avatar" className="avatar-image" />
      <div className="news-card">
        <h2 className="news-title">Australian Cricketer gives lie detector test</h2>
        <p className="news-description">
          In a light-hearted event, Australian cricketers like Pat Cummins and Mitchell Marsh took lie-detector tests on the Fox League YouTube channel, facing amusing questions. The team is on a white-ball tour of the United Kingdom, followed by a home summer.
        </p>
        <button className="know-more-btn">Know More</button>
      </div>
      <div className="actions">
        <button className="action-btn">Start</button>
        <button className="action-btn">Stop</button>
      </div>
    </div>
  );
};

export default NewsCard;
