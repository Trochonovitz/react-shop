import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import HomePage from './pages/HomePage/HomePage';
import BasketPage from './pages/BasketPage/BasketPage';
import AlcoholsCategoryPage from './pages/AlcoholsCategoryPage/AlcoholsCategoryPage';
import GamesPage from './pages/GamesPage/GamesPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/basket" component={BasketPage} />
        <Route path="/alcohol" component={AlcoholsCategoryPage} />
        <Route path="/games" component={GamesPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
