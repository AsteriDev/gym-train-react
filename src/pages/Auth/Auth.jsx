import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import { AuthContext } from '../../context/AuthContext';
import './Auth.css';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const Auth = () => {
  const history = useHistory();

  const {
    isSignUp: [isSignUp, setIsSignUp],
    name: [name, setName],
    email: [email, setEmail],
    password: [password, setPassword],
    number: [number, setNumber],
    user: [user, setUser],
  } = useContext(AuthContext);

  //! user
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       console.log(authUser);
  //       setUser(authUser);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [user]);

  const authHandler = (event) => {
    event.preventDefault();
    if (isSignUp) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push('/dashboard');
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push('/dashboard');
        })
        .catch((error) => alert(error.message));
    }
  };

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
              <>
                <h3>Name</h3>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <h3>Phone Number</h3>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </>
            ) : null}

            <h3>Email</h3>
            <input
              type="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h3>Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>

          <Button btnType="primary">
            <Link className="link" onClick={authHandler}>
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
