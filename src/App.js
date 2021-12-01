import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { store } from 'store/store';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailPage from 'pages/ProductDetailPage/ProductDetailPage';
import ProductsPage from 'pages/ProductsPage/ProductsPage';

const BASIC_URL = 'https://graphql.datocms.com/';
const client = new GraphQLClient({
  url: BASIC_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
  },
});

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <ClientContext.Provider value={client}>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/products/:id" component={ProductDetailPage} />
        </ClientContext.Provider>
      </Switch>
    </Router>
  </Provider>
);

export default App;
