import React, { useEffect, useContext } from 'react';

import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

import heroRight from '../../Assets/hero-right.svg';
import fig1 from '../../Assets/fig-1.svg';
import fig2 from '../../Assets/fig-2.svg';
import './Dashboard.css';

const Dashboard = () => {
  const {
    // isSignUp: [isSignUp, setIsSignUp],
    name: [name, setName],
    email: [email, setEmail],
    number: [number, setNumber],
    user: [user],
  } = useContext(AuthContext);

  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((response) => {
        setName(response.data().name);
        setEmail(response.data().email);
        setNumber(response.data().number);
      });
  }, [setEmail, setName, setNumber, user]);

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
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{number}</p>
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
