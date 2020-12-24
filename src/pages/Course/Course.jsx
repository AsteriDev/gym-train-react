import React from 'react';
import './Course.css';

import NavBar from '../../components/NavBar/NavBar';

const Course = (props) => {
  return (
    <div>
      <NavBar />

      <main className="course"></main>
    </div>
  );
};

export default Course;
