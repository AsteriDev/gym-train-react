import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './Course.css';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Player from '../../components/Player/Player';

import { courses } from '../../data/dummy-data';

const Course = ({
  match: {
    params: { id },
  },
}) => {
  console.log(id);
  // const [done, setDone] = useState(70);
  const done = 50;

  const courseData = courses.filter((data) => data.id === id);

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
            <h1>{courseData[0].title}</h1>
            <div className="progress">
              <div
                className="progress-done"
                style={{ opacity: 1, width: `${done}%` }}
              >
                {done}%
              </div>
            </div>
            <div className="course-list-content">
              {courseData[0].topics.map((topic) => {
                return (
                  // <Link to={`${id}/${topic.topicId}`}>
                  <Card>
                    <div className="course-card">{topic.name}</div>
                  </Card>
                  // </Link>
                );
              })}
            </div>
          </div>
          <Player />
          {/* <Route path="/course/:id/:topicId" component={Player} /> */}
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
