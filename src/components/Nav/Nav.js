import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';
import './Nav.css';

const Nav = () => (
  <header>
    <nav>
      <NavLink to="/" className="logo">
        <img src={logo} className="logo-img" alt="Logo" />
        <span className="title">Space Travelers Hub</span>
      </NavLink>
      <div className="links-container">
        <NavLink to="/Rockets" activeClassName="link active">Rockets</NavLink>
        <NavLink to="/Missions" activeClassName="link active">Missions</NavLink>
        <p className="para"> | </p>
        <NavLink to="/" activeClassName="active">My Profile</NavLink>
      </div>
    </nav>
  </header>
);

export default Nav;
