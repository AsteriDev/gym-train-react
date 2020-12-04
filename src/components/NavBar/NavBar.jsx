import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
  return <div className="nav">{props.children}</div>;
};

export default NavBar;
