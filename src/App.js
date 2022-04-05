import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import rootReducer from 'store/index';

const BASIC_URL = 'https://graphql.datocms.com/';
export const client = new GraphQLClient({
  url: BASIC_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
  },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const BlogPage = lazy(() => import('pages/BlogPage/BlogPage'));
const ContactPage = lazy(() => import('pages/ContactPage/ContactPage'));
const DetailPageProduct = lazy(() =>
  import('pages/DetailPageProduct/DetailPageProduct')
);
const DetailPageBlogArticle = lazy(() =>
  import('pages/DetailPageBlogArticle/DetailPageBlogArticle')
);
const ShopPage = lazy(() => import('pages/ShopPage/ShopPage'));
const AboutUsPage = lazy(() => import('pages/AboutUsPage/AboutUsPage'));

const App = () => (
  <Provider store={store}>
    <ClientContext.Provider value={client}>
      <Router>
        <Switch>
          <Suspense fallback={<div>loading....</div>}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sklep" component={ShopPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/o nas" component={AboutUsPage} />
            <Route exact path="/kontakt" component={ContactPage} />
            <Route exact path="/sklep/:id" component={DetailPageProduct} />
            <Route exact path="/blog/:id" component={DetailPageBlogArticle} />
            <Route exact path="/sklep/kolekcja/:id" component={ShopPage} />
          </Suspense>
        </Switch>
      </Router>
    </ClientContext.Provider>
  </Provider>
);

export default App;
