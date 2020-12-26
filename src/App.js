import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import './App.css';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import Course from './pages/Course/Course';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AuthContextProvider>
      <Route path="/" exact component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/course" component={Course} />
      <Footer />
    </AuthContextProvider>
  );
}
export default withRouter(App);
