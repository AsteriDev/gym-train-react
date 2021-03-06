import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

import heroRight from '../../Assets/hero-right.svg';
import fig1 from '../../Assets/fig-1.svg';
import fb from '../../Assets/Fb-com.svg';
import plus from '../../Assets/plus.svg';
import './Dashboard.css';

import { courses } from '../../data/dummy-data';

const Dashboard = () => {
  const {
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
      <Helmet>
        <title>LiveFitt - Dashboard</title>
      </Helmet>
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
      <section className="course-container">
        <h1>PROGRAMS</h1>
        <div className="course">
          <div className="course-main">
            <div className="card-container">
              {courses.map((data) => {
                if (data.type === 'free') {
                  return (
                    <Link className="card-link" to={`course/${data.id}`}>
                      <Card cardType="small">
                        <img
                          className="card-image"
                          src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                          alt=""
                        />
                        <div className="card-heading">
                          <p className="card-title">{data.title}</p>
                          <p className="card-tag">OPEN</p>
                        </div>
                        <p className="card-description">{data.description}</p>
                      </Card>
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <img className="plus" src={plus} alt="plus-sign" />
          <div className="course-bonus">
            <div className="card-container">
              {courses.map((data) => {
                if (data.type !== 'free') {
                  return (
                    <Link className="card-link" to={`course/${data.id}`}>
                      <Card cardType="small">
                        <img
                          className="card-image"
                          src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                          alt=""
                        />
                        <div className="card-heading">
                          <p className="card-title">{data.title}</p>
                          <p className="card-tag">JOIN</p>
                        </div>
                        <p className="card-description">{data.description} </p>
                      </Card>
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="bottom">
        <img className="bottom-fb" src={fb} alt="fb-community" />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
