import '@testing-library/jest-dom';
import { fireEvent, render } from 'test-utils';
import Basket from '../Basket/Basket';
import Navigation from './Navigation';

describe('Navigation and basket functionality', () => {
  it('shows basket', () => {
    const { getByTestId } = render(
      <>
        <Navigation />
        <Basket />
      </>
    );
    const icon = getByTestId('basketButton');
    fireEvent.click(icon);
    const basket = getByTestId('basketTitle');
    expect(basket).toBeInTheDocument();
    expect(basket).toBeVisible();
  });
});
