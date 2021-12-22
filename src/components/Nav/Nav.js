import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './planet.png';
import './Nav.css';

const Nav = () => (
  <header>
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
        <span>Space Travelers Hub</span>
      </Link>
      <ul className="links-container">
        <li><NavLink to="/rockets">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li>|</li>
        <li><NavLink to="/profile">My Profile</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Nav;
