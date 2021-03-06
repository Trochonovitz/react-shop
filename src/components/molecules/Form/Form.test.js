import '@testing-library/jest-dom';
import { fireEvent, render } from 'test-utils';
import Form from './Form';

describe('with valid inputs', () => {
  it('calls the onSubmit function', async () => {
    const mockOnSubmit = jest
      .fn()
      .mockImplementation((e) => e.preventDefault());
    const { getByPlaceholderText, getByText } = render(
      <Form onSubmit={mockOnSubmit} />
    );
    const nameInput = getByPlaceholderText('Imię i nazwisko');
    const emailInput = getByPlaceholderText('E-mail');
    const messageInput = getByPlaceholderText('Twoja wiadomość');
    const submitButton = getByText('Wyślij');

    fireEvent.change(nameInput, {
      target: { value: 'Kamil Andrzejewicz' },
    });
    fireEvent.change(emailInput, {
      target: { value: 'kamil@andrzejewicz.com' },
    });
    fireEvent.change(messageInput, {
      target: { value: 'Wiadomosć' },
    });

    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});

// describe('with invalid email', () => {
//   it('renders the email validation error', async () => {
//     const { getByPlaceholderText, container } = render(<Form />);
//     const emailInput = getByPlaceholderText('E-mail');

//     await act(async () => {
//       fireEvent.change(emailInput, { target: { value: 'invalid email' } });
//       fireEvent.blur(emailInput);
//     });

//     expect(container.innerHTML).toMatch('Please enter an email address');
//   });
// });
