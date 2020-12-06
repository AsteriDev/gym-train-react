import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = (props) => {
  return (
    <div className="nav">
      <NavLink to={'/about'}>Dashboard</NavLink>
      {props.children}
    </div>
  );
};

export default NavBar;
