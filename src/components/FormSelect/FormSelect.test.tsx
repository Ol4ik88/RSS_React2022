import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from 'pages/FormPage';

describe('<FormSelect />', () => {
  test('should render select-component', () => {
    render(<FormPage />);
    const selectInput = screen.getByRole('combobox');
    expect(selectInput).toBeInTheDocument();
  });
  test('should render value selection', () => {
    render(<FormPage />);
    const selectInput = screen.getByRole('combobox');
    userEvent.selectOptions(selectInput, screen.getByRole('option', { name: 'Dog' }));
    expect(selectInput).toHaveValue('Dog');
  });
});
