import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { createStore } from 'redux';
import rootReducer from 'store/index';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from 'pages/ProductsPage/ProductsPage';
import BlogPage from 'pages/BlogPage/BlogPage';
import ContactPage from 'pages/ContactPage/ContactPage';
import DetailPageProduct from 'pages/DetailPageProduct/DetailPageProduct';
import DetailPageBlogArticle from 'pages/DetailPageBlogArticle/DetailPageBlogArticle';

const BASIC_URL = 'https://graphql.datocms.com/';
const client = new GraphQLClient({
  url: BASIC_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
  },
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <ClientContext.Provider value={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sklep" component={ProductsPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route path="/kontakt" component={ContactPage} />
          <Route path="/sklep/:id" component={DetailPageProduct} />
          <Route path="/blog/:id" component={DetailPageBlogArticle} />
          {/* <Route path="/kolekcja/:id" component={} /> */}
        </Switch>
      </Router>
    </ClientContext.Provider>
  </Provider>
);

export default App;
