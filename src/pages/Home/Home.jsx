import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

const Home = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav class="home-nav">
        <NavLink class="home-nav-logo" to="/">
          LOGO
        </NavLink>
        <div className="home-nav-icon" onClick={clickHandler}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={clicked ? 'home-nav-menu active' : 'home-nav-menu'}>
          <NavLink className="home-nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="home-nav-link" to="/">
            About Us
          </NavLink>
          <NavLink className="home-nav-link" to="/">
            Contact Us
          </NavLink>
          <NavLink className="home-nav-login" to="/auth">
            Login
          </NavLink>
        </div>
      </nav>
      <header>Header</header>
    </>
  );
};

export default Home;
