import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

import './NavBar.css';
import Dropdown from '../Dropdown/Dropdown';

const NavBar = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-logo">LOGO...</div>
      <div className="nav-dropdown">
        <div className="nav-item">
          <p className="icon-button" onClick={() => setOpen(!open)}>
            <FaUserCircle color="white" />
          </p>
          {open && <Dropdown />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
