import '@testing-library/jest-dom';
import { render, screen } from 'test-utils';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders products on homepage', () => {
    render(<HomePage />);
  });

  it('shows downloaded products', async () => {
    render(<HomePage />);
    const product = await screen.findByText(/notatnik uma/i);
    expect(product).toBeInTheDocument();
  });
});
