import React from 'react';

import ReactPlayer from 'react-player';

import Card from '../Card/Card';

const Player = () => {
  return (
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
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                amet Lorem Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Amet architecto inventore quaerat quis
              </p>
            </div>
            <div className="resourse">
              <a href="https://www.google.com" className="resourse-link">
                Resourse Link
              </a>
              <p className="resourse-desc">
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                amet Lorem Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Player;
