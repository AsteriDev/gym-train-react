import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const Auth = () => {
  const [signup, setSignup] = useState(false);
  return (
    <div className="auth-container">
      <Card>
        <div className="auth-card">
          <p className="heading">
            <span className="heading-blue">
              {signup ? 'Sign Up' : 'Log In'}
            </span>{' '}
            into the website
          </p>
          <form className="form-box">
            {signup ? (
              <div className="form-element">
                <h3>Name</h3>
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
              {signup ? 'Sign Up' : 'Log In'}
            </Link>
          </Button>

          <div className="form-bottom">
            <h3>
              {signup ? 'Already have an account?' : "Don't have an Account?"}
            </h3>
            <Button
              btnType="secondary"
              clicked={() => {
                signup ? setSignup(false) : setSignup(true);
              }}
            >
              {!signup ? 'Sign Up' : 'Log In'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
