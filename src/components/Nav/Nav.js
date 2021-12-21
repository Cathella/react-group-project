import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './planet.png';
import './Nav.css';

const Nav = () => (
  <header>
    <nav>
      <Link to="/" className="logo">
        <img src={logo} className="logo-img" alt="Logo" />
        <span className="title">Space Travelers Hub</span>
      </Link>
      <div className="links-container">
        <NavLink to="/rockets" activeClassName="active">Rockets</NavLink>
        <NavLink to="/missions" activeClassName="active">Missions</NavLink>
        <p className="para"> | </p>
        <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
      </div>
    </nav>
  </header>
);

export default Nav;
