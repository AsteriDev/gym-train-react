import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

import heroRight from '../../Assets/hero-right.svg';
import fig1 from '../../Assets/fig-1.svg';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <NavBar />
      <div className="hero">
        <div className="hero-left"></div>
        <div className="hero-right">
          <img className="hero-right-back" src={heroRight} alt="hero-right" />
          <img className="hero-right-front" src={fig1} alt="hero-right" />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
