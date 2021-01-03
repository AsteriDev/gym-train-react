import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { db, auth } from '../../firebase';

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
    //! user to check if the user is logged in or not
    user: [user, setUser],
  } = useContext(AuthContext);

  //! user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setUser, user]);

  const authHandler = (event) => {
    event.preventDefault();
    if (isSignUp) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          //! to store user data in collection at sign up
          db.collection('users').doc(auth.user.uid).set({
            name: name,
            email: email,
            number: number,
          });
        })
        .then(() => {
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
            {/*Only visible when User signup*/}
            {isSignUp ? (
              <>
                {/*Name filed*/}
                <h3>Name</h3>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {/*Phone Number filed*/}
                <h3>Phone Number</h3>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </>
            ) : null}
            {/*Email filed*/}

            <h3>Email</h3>
            <input
              type="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/*Password filed*/}
            <h3>Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          {/*Login button*/}
          <Button btnType="primary">
            <Link className="link" onClick={authHandler}>
              {isSignUp ? 'Sign Up' : 'Log In'}
            </Link>
          </Button>

          <div className="form-bottom">
            <h3>
              {isSignUp ? 'Already have an account?' : "Don't have an Account?"}
            </h3>
            {/*Button to change signup or login*/}
            <Button
              btnType="secondary"
              clicked={() => {
                setName('');
                setPassword('');
                setEmail('');
                setNumber('');
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
