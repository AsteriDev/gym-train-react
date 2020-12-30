import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import './Course.css';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';

const Course = (props) => {
  return (
    <div>
      <NavBar />
      <main className="course-page">
        <Link className="course-link" to={'/dashboard'}>
          &lt; Back to Dashboard
        </Link>
        <div className="course-main-container">
          <div className="course-list">
            <h1 className="course-list-title">30 days training</h1>
            <Card>1. Introduction</Card>
          </div>
          <div className="course-player">
            <div className="course-player-title">
              <h1 className="course-player-heading">1. Introduction</h1>
              <div className="course-player-progress">Your Progress</div>
            </div>
            <div className="player">
              <ReactPlayer
                url="https://vimeo.com/194555118"
                controls={true}
                light={true}
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Course;
