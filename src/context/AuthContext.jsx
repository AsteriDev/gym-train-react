import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        isSignUp: [isSignUp, setIsSignUp],
        name: [name, setName],
        email: [email, setEmail],
        password: [password, setPassword],
        number: [number, setNumber],
        user: [user, setUser],
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
