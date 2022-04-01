import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import Basket from '../Basket/Basket';
import Navigation from './Navigation';

const MockedComponent = () => (
  <AppProviders>
    <Navigation />
    <Basket />
  </AppProviders>
);

describe('Navigation and basket functionality', () => {
  it('shows basket', () => {
    const { getByTestId } = render(<MockedComponent />);
    const icon = getByTestId('basketButton');
    fireEvent.click(icon);
    const basket = getByTestId('basketTitle');
    expect(basket).toBeInTheDocument();
    expect(basket).toBeVisible();
  });
});
