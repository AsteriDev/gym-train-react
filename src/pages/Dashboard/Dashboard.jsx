import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

import heroRight from '../../Assets/hero-right.svg';
import fig1 from '../../Assets/fig-1.svg';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavBar />

      <section className="hero">
        <div className="hero-left"></div>
        <div className="hero-right">
          <img className="hero-right-back" src={heroRight} alt="hero-right" />
          <img className="hero-right-front" src={fig1} alt="hero-right" />
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default Dashboard;
