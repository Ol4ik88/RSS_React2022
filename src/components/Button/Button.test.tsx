import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from 'components/Form/Form';
import FormPage from 'pages/FormPage';
import React from 'react';

describe('<Button />', () => {
  test('should render buttons', () => {
    render(<FormPage />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  test('should render disabled buttons on init', () => {
    const card = {
      img: 'url',
    };
    const addCard = jest.fn((card) => card);
    render(<Form addCard={addCard(card)} />);
    const button = screen.getByRole('button', { name: 'Create card' });
    expect(button).toBeDisabled();
  });
  test('should render available button when input was changed', () => {
    const card = {
      img: 'url',
    };
    const addCard = jest.fn((card) => card);
    render(<Form addCard={addCard(card)} />);
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'Name');
    const button = screen.getByRole('button', { name: 'Create card' });
    expect(button).not.toBeDisabled();
  });
  test('should the button is disabled again after invalid input and clicking the submit button', () => {
    const card = {
      img: 'url',
    };
    const addCard = jest.fn((card) => card);
    render(<Form addCard={addCard(card)} />);
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'N');
    const button = screen.getByRole('button', { name: 'Create card' });
    userEvent.click(button);
    expect(button).toBeDisabled();
  });
  test('should reset the input fields after clicking on the reset button', () => {
    const card = {
      img: 'url',
    };
    const addCard = jest.fn((card) => card);
    render(<Form addCard={addCard(card)} />);
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'Name');
    const button = screen.getByRole('button', { name: 'Reset input' });
    userEvent.click(button);
    expect(nameInput).toHaveValue('');
  });
});
