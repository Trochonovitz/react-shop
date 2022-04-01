import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import SearchBar from './SearchBar';

const MockedComponent = () => (
  <AppProviders>
    <SearchBar />
  </AppProviders>
);

describe('SearchBar Component', () => {
  it('renders component with visible elements', () => {
    const { getByPlaceholderText } = render(<MockedComponent />);
    const input = getByPlaceholderText('Szukaj');
    expect(input).toBeInTheDocument();
  });

  it('changes input value', () => {
    const { getByTestId } = render(<MockedComponent />);
    const input = getByTestId('searchBar-input');

    fireEvent.change(input, { target: { value: 'Notatnik' } });
    expect(input.value).toMatch('Notatnik');
  });

  // it('shows searching element', async () => {
  //   const { findByText, getByTestId } = render(<MockedComponent />);
  //   const input = getByTestId('searchBar-input');
  //   const listELement = await findByText('Notatnik Uma');
  //   expect(listELement).toBeInTheDocument();
  // })
});
