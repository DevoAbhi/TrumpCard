import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <Link to="/">Trump Card Game</Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
