import React, { useContext } from 'react';
import { Route, withRouter } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import './App.css';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';

function App() {
  return (
    <AuthContextProvider>
      <Route path="/" exact component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
    </AuthContextProvider>
  );
}
export default withRouter(App);
