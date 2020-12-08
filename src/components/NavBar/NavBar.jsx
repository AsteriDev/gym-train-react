import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = (props) => {
  return (
    <div className="nav">
      <div className="nav-logo">LOGO</div>

      <div className="nav-items">
        <NavLink
          exact
          className="nav-item"
          activeClassName="nav-active"
          to={'/dashboard'}
        >
          Home
        </NavLink>
        <NavLink
          exact
          className="nav-item"
          activeClassName="nav-active"
          to={'/about'}
        >
          About
        </NavLink>
        <NavLink
          exact
          className="nav-item"
          activeClassName="nav-active"
          to={'/'}
        >
          Log Out
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
