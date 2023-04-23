import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <Link to="/">Trump Card Game</Link>
      </div>
      <div className="navbar-nav">
        <div className="nav-item">
        <Link className='nav-link' to="/auth" >Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
