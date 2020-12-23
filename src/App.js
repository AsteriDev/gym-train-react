import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import './App.css';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Course from './pages/Course/Course';

function App() {
  return (
    <AuthContextProvider>
      <Route path="/" exact component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/course" component={Course} />
    </AuthContextProvider>
  );
}
export default withRouter(App);
