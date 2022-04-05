import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ClientContext } from 'graphql-hooks';
import { store, client } from 'App';

const AllTheProviders = ({ children }) => {
  return (
    <Router>
      <ClientContext.Provider value={client}>
        <Provider store={store}>{children}</Provider>
      </ClientContext.Provider>
    </Router>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
