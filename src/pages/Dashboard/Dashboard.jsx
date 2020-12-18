import React, { useEffect } from 'react';

import { db } from '../../firebase';

import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

import heroRight from '../../Assets/hero-right.svg';
import fig1 from '../../Assets/fig-1.svg';
import fig2 from '../../Assets/fig-2.svg';
import './Dashboard.css';

const Dashboard = () => {
  useEffect(() => {
    db.collection('users')
      .get()
      .then((snapshot) => console.log(snapshot.docs));
  }, []);

  return (
    <div className="dashboard">
      <NavBar />
      <section className="hero">
        <div className="hero-left">
          <img
            className="hero-left-image"
            src="https://images.unsplash.com/photo-1607573278849-e45313536f23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="UserImage"
          />
          <div className="hero-left-content">
            <h2>Piyush Pandey</h2>
            <p>piyushpandey@gmail.com</p>
            <p>+91-9114182378</p>
          </div>
        </div>
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

        <div className=""></div>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
