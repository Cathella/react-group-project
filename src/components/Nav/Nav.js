import React from 'react';
import { Link } from 'react-router-dom';
import logo from './planet.png';
import './Nav.css';

const Nav = () => (
  <header>
    <nav>
      <Link to="/" className="logo">
        <img src={logo} className="logo-img" alt="Logo" />
        <span>Space Travelers Hub</span>
      </Link>
      <div className="links-container">
        <Link to="/Rockets" className="links">Rockets</Link>
        <Link to="/Missions" className="links">Missions</Link>
        <p> | </p>
        <Link to="/" className="links">My Profile</Link>
      </div>
    </nav>
  </header>
);

export default Nav;
