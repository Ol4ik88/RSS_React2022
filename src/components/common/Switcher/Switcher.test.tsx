import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from 'pages/FormPage';
import React from 'react';

describe('Renders <Switcher />', () => {
  test('renders switcher-component', () => {
    render(<FormPage />);
    const switcher = screen.getByText(/Gender:/i);
    expect(switcher).toBeInTheDocument();
  });
  test('click', () => {
    render(<FormPage />);
    const switcher = screen.getByTestId('switcher');
    userEvent.click(switcher);
    expect(switcher).toBeChecked();
  });
});
