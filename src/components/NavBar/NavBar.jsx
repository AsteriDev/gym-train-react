import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import { AuthContext } from '../../context/AuthContext';

import './NavBar.css';
import Button from '../Button/Button';

const NavBar = (props) => {
  const history = useHistory();

  const {
    name: [, setName],
    email: [, setEmail],
    password: [, setPassword],
    number: [, setNumber],
  } = useContext(AuthContext);

  const logout = () => {
    auth.signOut();
    history.push('/');
    setName('');
    setPassword('');
    setEmail('');
    setNumber('');
  };
  return (
    <div className="nav">
      <div className="nav-logo">LOGO...</div>
      <div className="nav-logout">
        <Button btnType="primary" clicked={logout}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
