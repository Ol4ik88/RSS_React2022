import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from 'pages/FormPage';
import React from 'react';

describe('<Switcher />', () => {
  test('should render switcher-component', () => {
    render(<FormPage />);
    const switcher = screen.getByText(/Gender:/i);
    expect(switcher).toBeInTheDocument();
  });
  test('should click toggle', () => {
    render(<FormPage />);
    const switcher = screen.getByTestId('switcher');
    userEvent.click(switcher);
    expect(switcher).toBeChecked();
  });
});
