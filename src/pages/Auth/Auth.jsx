import React from 'react';

import './Auth.css';
import Card from '../../components/Card/Card';

const Auth = () => {
  return (
    <div className="auth-container">
      <Card>
        <p className="heading">
          <span className="heading-blue">Sign Up</span> into the website
        </p>
      </Card>
    </div>
  );
};

export default Auth;
