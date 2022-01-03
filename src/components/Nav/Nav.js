import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './planet.png';

const Nav = () => (
  <header>
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
        <span>Space Travelers Hub</span>
      </Link>
      <ul>
        <li>
          <NavLink
            to="/rockets"
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
          >
            Missions
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
