import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import ReactPlayer from 'react-player';

import Gallery from '../../components/HomeComponents/Gallery';
import Testimonials from '../../components/HomeComponents/Testimonials';
import Blog from '../../components/HomeComponents/Blog';
import About from '../../components/HomeComponents/About';
import Contact from '../../components/HomeComponents/Contact';
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
        <Link class="home-nav-logo" to="/">
          LOGO
        </Link>
        <div className="home-nav-icon" onClick={clickHandler}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={clicked ? 'home-nav-menu active' : 'home-nav-menu'}>
          <Link className="home-nav-link" to="testimonial">
            Testimonials
          </Link>
          <Link className="home-nav-link" to="gallery">
            Gallery
          </Link>
          <Link className="home-nav-link" to="blog">
            Blog
          </Link>
          <Link className="home-nav-link" to="about">
            About Us
          </Link>
          <Link className="home-nav-link" to="contact">
            Contact Us
          </Link>
          <Link className="home-nav-login" to="/auth">
            Login
          </Link>
        </div>
      </nav>
      <header className="home-header">
        <ReactPlayer controls={true} url="https://vimeo.com/63804783" />
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
      <Blog />
      <About />
      <Contact />
    </>
  );
};

export default Home;
