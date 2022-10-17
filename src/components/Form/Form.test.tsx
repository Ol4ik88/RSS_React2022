import { render, screen } from '@testing-library/react';
import FormPage from 'pages/FormPage';
import React from 'react';

describe('<Form/>', () => {
  test('should render form-component', () => {
    render(<FormPage />);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});
