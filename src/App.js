import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Layout>
        <Route path="/auth" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Layout>
    </div>
  );
}

export default withRouter(App);
