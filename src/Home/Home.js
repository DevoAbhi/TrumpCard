import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to the Trump Card Game!</h2>
      <p className="home-description">Click the button below to start playing.</p>
      <Link to="/cards">
        <button className="home-button">Start Game</button>
      </Link>
    </div>
  );
};

export default Home;
