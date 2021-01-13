import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ReactPlayer from 'react-player';

import Gallery from '../../components/HomeComponents/Gallery';
import Testimonials from '../../components/HomeComponents/Testimonials';
import Card from '../../components/Card/Card';

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
      <Testimonials />
      <Gallery />
      {/* <section className="blog">
        <h1>BLOG</h1>
        <div className="testi-content">
          {Testimonial.map((item) => (
            <img className="testi-img" src={item.url} alt={item.title} />
          ))}
        </div>
      </section> */}
      <section className="about">About</section>
      <section className="contact">Contact</section>
    </>
  );
};

export default Home;
