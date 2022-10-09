import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from 'components/Form/Form';
import FormPage from 'pages/FormPage';
import React from 'react';

describe('Renders <Button/>', () => {
  test('renders buttons', () => {
    render(<FormPage />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  test('initially the buttons are disable', () => {
    const card = {
      img: 'url',
    };
    const addCard = jest.fn((card) => card);
    render(<Form addCard={addCard(card)} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toBeDisabled();
  });
  test('after the first input the button is not disable', () => {
    const card = {
      img: 'url',
    };
    const addCard = jest.fn((card) => card);
    render(<Form addCard={addCard(card)} />);
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'Name');
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).not.toBeDisabled();
  });
  test('after invalid input, click on the submit button, the button is disabled again', () => {
    const card = {
      img: 'url',
    };
    const addCard = jest.fn((card) => card);
    render(<Form addCard={addCard(card)} />);
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'N');
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[0]);
    expect(buttons[0]).toBeDisabled();
  });
  test('click on the reset button, clear input fields', () => {
    const card = {
      img: 'url',
    };
    const addCard = jest.fn((card) => card);
    render(<Form addCard={addCard(card)} />);
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'Name');
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[1]);
    expect(nameInput).toHaveValue('');
  });
});
