import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet';

import './Course.css';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';

const Course = (props) => {
  // const [done, setDone] = useState(70);
  const done = 50;
  return (
    <>
      <Helmet>
        <title>LiveFitt - Course</title>
      </Helmet>
      <NavBar />
      <main className="course-page">
        <Link className="course-link" to={'/dashboard'}>
          &lt; Back to Dashboard
        </Link>
        <div className="course-main-container">
          <div className="course-list">
            <h1>30 days training</h1>
            <div className="progress">
              <div
                className="progress-done"
                style={{ opacity: 1, width: `${done}%` }}
              >
                {done}%
              </div>
            </div>
            <div className="course-list-content">
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
              <Card>
                <div className="course-card">1. Introduction</div>
              </Card>
            </div>
          </div>
          <div className="course-player">
            <h1 className="course-player-heading">1. Introduction</h1>
            <div className="player">
              <ReactPlayer
                url="https://vimeo.com/194555118"
                controls={true}
                height="100%"
                width="100%"
              />
            </div>
            <div className="course-player-controls">
              <p className="controls">&lt; Prev</p>
              <p className="mac">Mark as Complete</p>
              <p className="controls">Next &gt;</p>
            </div>
            <div className="course-resourse">
              <h1>Resourses</h1>
              <Card>
                <div className="course-resourse-content">
                  <div className="resourse">
                    <a href="https://www.google.com" className="resourse-link">
                      Resourse Link
                    </a>
                    <p className="resourse-desc">
                      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
                      sit amet Lorem Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Amet architecto inventore quaerat quis
                    </p>
                  </div>
                  <div className="resourse">
                    <a href="https://www.google.com" className="resourse-link">
                      Resourse Link
                    </a>
                    <p className="resourse-desc">
                      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
                      sit amet Lorem Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="course-comment-container">
          <h1>Comments</h1>
          <textarea rows="3" cols="60" placeholder="Comment here"></textarea>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Course;
