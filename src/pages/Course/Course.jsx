import React, { useState } from 'react';
import './Course.css';

const Course = (props) => {
  const [course, setCourse] = useState({
    ID: 1,
    title:
      'Learning How to Create Beautiful Scenes in Illustrator in 60 minutes',
    about:
      "In this course i'll teach you how to make your illustration look really good. We're gonna study a lot of cases here, setting your work panel, makingg some awesome actions and presets for future.<br />Hope you'll get some really usefull stuff out of this course. Good Luck to all!",
    duration: '82 min',

    videos: [
      {
        ID: 1,
        title: 'Introduction',
        duration: '03 min 24 secs',
      },
      {
        ID: 2,
        title: 'Getting Started',
        duration: '09 min 55 secs',
      },
      {
        ID: 1,
        title: 'The Illustration',
        duration: '62 mins 48 secs',
      },
    ],
  });
  return <div></div>;
};

export default Course;
