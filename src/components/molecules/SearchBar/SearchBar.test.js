import '@testing-library/jest-dom';
import { fireEvent, render } from 'test-utils';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('renders component with visible elements', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('Szukaj');
    expect(input).toBeInTheDocument();
  });

  it('changes input value', () => {
    const { getByTestId } = render(<SearchBar />);
    const input = getByTestId('searchBar-input');

    fireEvent.change(input, { target: { value: 'Notatnik' } });
    expect(input.value).toMatch('Notatnik');
  });

  it('shows searching element', async () => {
    const { findByText, getByTestId } = render(<SearchBar />);
    const input = getByTestId('searchBar-input');
    fireEvent.change(input, { target: { value: 'Notatnik' } });
    const listELement = await findByText(/notatnik uma/i);
    expect(listELement).toBeInTheDocument();
  });
});
