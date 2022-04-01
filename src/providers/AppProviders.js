import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'App';

const AppProviders = ({ children }) => (
  <Router>
    <Provider store={store}>{children}</Provider>
  </Router>
);

export default AppProviders;
