import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import store from './store/store';
import HomePage from './pages/HomePage/HomePage';
import BasketPage from './pages/BasketPage/BasketPage';
import AlcoholsCategoryPage from './pages/AlcoholsCategoryPage/AlcoholsCategoryPage';
import GamesPage from './pages/GamesPage/GamesPage';

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
          <Route path="/basket" component={BasketPage} />
          <Route path="/alcohol" component={AlcoholsCategoryPage} />
          <Route path="/games" component={GamesPage} />
        </ClientContext.Provider>
      </Switch>
    </Router>
  </Provider>
);

export default App;
