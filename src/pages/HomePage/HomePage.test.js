import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import HomePage from './HomePage';

const MockedComponent = () => (
  <AppProviders>
    <HomePage />
  </AppProviders>
);

describe('HomePage', () => {
  it('renders products on homepage', async () => {
    const { findByText, getByText } = render(<MockedComponent />);
  });
});
