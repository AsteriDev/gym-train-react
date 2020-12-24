import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className={['card', props.cardType].join(' ')}>{props.children}</div>
  );
};

export default Card;
