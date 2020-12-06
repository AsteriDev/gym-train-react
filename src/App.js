import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
      </Layout>
    </div>
  );
}

export default withRouter(App);
