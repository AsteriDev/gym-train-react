import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

import './Dropdown.css';

const Dropdown = () => {
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

  const DropdownItem = (props) => {
    return <p className="menu-item">{props.children}</p>;
  };

  return (
    <div className="dropdown">
      <DropdownItem>Edit Profile</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Help & Support</DropdownItem>
      <DropdownItem>
        <p style={{ cursor: 'pointer' }} onClick={logout}>
          Log out
        </p>
      </DropdownItem>
    </div>
  );
};

export default Dropdown;
