import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/transparentwhite.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/" exact>
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <NavLink className="linkStyle" to="/telmii">
        Latest Product Launches
      </NavLink>
      <NavLink className="linkStyle" to="/tpm">
        Technical Product Management Experience
      </NavLink>
      <NavLink className="linkStyle" to="/organizational_leadership">
        Organizational Leadership
      </NavLink>
    </nav>
  );
};

export default Navbar;
