import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ReactPlayer from 'react-player';
import Card from '../../components/Card/Card';

import './Home.css';

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [sticky, setSticky] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  const stickyNav = () => {
    if (window.scrollY >= 500) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener('scroll', stickyNav);

  return (
    <>
      <nav class={sticky ? 'sticky home-nav' : 'home-nav'}>
        <NavLink class="home-nav-logo" to="/">
          LOGO
        </NavLink>
        <div className="home-nav-icon" onClick={clickHandler}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={clicked ? 'home-nav-menu active' : 'home-nav-menu'}>
          <NavLink className="home-nav-link" to="/">
            Gallery
          </NavLink>
          <NavLink className="home-nav-link" to="/">
            Blog
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
      <header className="home-header">
        <ReactPlayer url="https://vimeo.com/63804783" />
        <Card>
          <div className="home-form">
            <h1>Submit your form</h1>
            <div className="form-container">
              <input type="text" required />
              <label htmlFor="name" className="form-label">
                <span className="form-name">Name</span>
              </label>
            </div>
            <div className="form-container">
              <input type="email" required />
              <label htmlFor="name" className="form-label">
                <span className="form-name">Email</span>
              </label>
            </div>
            <div className="form-container">
              <input type="numeric" required />
              <label htmlFor="name" className="form-label">
                <span className="form-name">Number</span>
              </label>
            </div>
          </div>
        </Card>
      </header>
      <section className="testimonials">Testimonial</section>
      <section className="gallery">Gallery</section>
      <section className="blog">Blog</section>
      <section className="about">About</section>
      <section className="contact">Contact</section>
    </>
  );
};

export default Home;
