import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { createStore } from 'redux';
import rootReducer from 'store/index';
import HomePage from './pages/HomePage/HomePage';
import BlogPage from 'pages/BlogPage/BlogPage';
import ContactPage from 'pages/ContactPage/ContactPage';
import DetailPageProduct from 'pages/DetailPageProduct/DetailPageProduct';
import DetailPageBlogArticle from 'pages/DetailPageBlogArticle/DetailPageBlogArticle';
import ProductsPageTemplate from 'templates/ProductsPageTemplate/ProductsPageTemplate';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';

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
          <Route exact path="/sklep" component={ProductsPageTemplate} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/o nas" component={AboutUsPage} />
          <Route exact path="/kontakt" component={ContactPage} />
          <Route exact path="/sklep/:id" component={DetailPageProduct} />
          <Route exac path="/blog/:id" component={DetailPageBlogArticle} />
          <Route
            exact
            path="/sklep/kolekcja/:id"
            component={ProductsPageTemplate}
          />
        </Switch>
      </Router>
    </ClientContext.Provider>
  </Provider>
);

export default App;
