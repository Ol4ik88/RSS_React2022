import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from 'pages/FormPage';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('<Button />', () => {
  test('should render buttons', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  test('should render disabled buttons on init', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const button = screen.getByRole('button', { name: 'Create card' });
    expect(button).toBeDisabled();
  });
  test('should render available button when input was changed', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'Name');
    const button = screen.getByRole('button', { name: 'Create card' });
    expect(button).not.toBeDisabled();
    userEvent.clear(nameInput);
  });
  test('should the button is disabled again after invalid input and clicking the submit button', async () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'N');
    userEvent.keyboard('{Enter}');
    const button = await screen.findByText('Create card');
    setTimeout(() => {
      expect(button).toBeDisabled();
    }, 0);
    userEvent.clear(nameInput);
  });
  test('should reset the input fields after clicking on the reset button', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'Name');
    const button = screen.getByRole('button', { name: 'Reset input' });
    userEvent.click(button);
    expect(nameInput).toHaveValue('');
  });
});
