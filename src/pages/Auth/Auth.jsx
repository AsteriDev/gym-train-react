import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-container">
      <Card cardType="big">
        <div className="auth-card">
          <p className="heading">
            <span className="heading-blue">
              {isSignUp ? 'Sign Up' : 'Log In'}
            </span>{' '}
            into LiveFitt
          </p>
          <form className="form-box">
            {isSignUp ? (
              <div className="form-element">
                <h3>First Name</h3>
                <input type="text" />
                <h3>Last Name</h3>
                <input type="text" />
              </div>
            ) : null}

            <div className="form-element">
              <h3>Email</h3>
              <input type="Email" />
            </div>

            <div className="form-element">
              <h3>Password</h3>
              <input type="password" />
            </div>
          </form>

          <Button btnType="primary">
            <Link className="link" to="/dashboard">
              {isSignUp ? 'Sign Up' : 'Log In'}
            </Link>
          </Button>

          <div className="form-bottom">
            <h3>
              {isSignUp ? 'Already have an account?' : "Don't have an Account?"}
            </h3>
            <Button
              btnType="secondary"
              clicked={() => {
                isSignUp ? setIsSignUp(false) : setIsSignUp(true);
              }}
            >
              {!isSignUp ? 'Sign Up' : 'Log In'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
