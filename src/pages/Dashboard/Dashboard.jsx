import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';

import heroRight from '../../Assets/hero-right.svg';
import fig1 from '../../Assets/fig-1.svg';
import fig2 from '../../Assets/fig-2.svg';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavBar />

      <section className="hero">
        <div className="hero-left">Customer Details</div>
        <div className="hero-right">
          <img className="hero-right-back" src={heroRight} alt="hero-right" />
          <img className="hero-right-front" src={fig1} alt="hero-right" />
        </div>
      </section>

      <section className="course">
        <div className="course-main">
          <img className="course-main-fig" src={fig2} alt="" />
          <div className="course-main-content">
            <h1>COURSES ENROLLED</h1>
            <div className="card-container">
              <Card cardType="small">Card Courses</Card>
              <Card cardType="small">Card Courses</Card>
            </div>
          </div>
        </div>
        <div className="course-bonus">
          <h2>BONUS COURSES</h2>
          <h1>Coming Soon...</h1>
        </div>
        <div className="social">
          <h2>CONNECT US AT</h2>
          <div className="social-content">
            <a href="https://www.facebook.com/">
              <img
                src="https://img.icons8.com/fluent/80/000000/facebook-new.png"
                alt="Facebook"
              />
            </a>

            <a href="https://www.instagram.com/">
              <img
                src="https://img.icons8.com/fluent/80/000000/instagram-new.png"
                alt="Instagram"
              />
            </a>

            <a href="https://www.youtube.com/">
              <img
                src="https://img.icons8.com/color/80/000000/youtube-play.png"
                alt="YouTube"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
