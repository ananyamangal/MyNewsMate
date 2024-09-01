import React from 'react';
import './home.css';
import imagee from "./assets/Screenshot_2024-09-01_at_1.32.02_PM-removebg-preview.png";

function Home() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#choose-avatar">Choose Avatar</a>
          <a href="#news">News</a>
        </div>
        <div className="navbar-login">
          <a href="#login">Login/Signup</a>
        </div>
      </header>
      <main className="main-content">
        <h1 className="title">MY NEWS MATE</h1>
        <div className="description-box">
          <p>
            Your personal news buddy, reading the latest updates tailored just for you, anytime, anywhere.
          </p>
        </div>
        <button className="watch-news-button">Watch News Now!</button>
        <img src={imagee }alt="News Avatar" className="avatar-image" />
      </main>
    </div>
  );
}

export default Home;
