import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'App';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const BASIC_URL = 'https://graphql.datocms.com/';
const client = new GraphQLClient({
  url: BASIC_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
  },
});

const AppProviders = ({ children }) => (
  <Router>
    <ClientContext.Provider value={client}>
      <Provider store={store}>{children}</Provider>
    </ClientContext.Provider>
  </Router>
);

export default AppProviders;
