import { render, screen } from '@testing-library/react';
import FormPage from 'pages/FormPage';
import React from 'react';

describe('Renders <Form/>', () => {
  test('renders form-component', () => {
    render(<FormPage />);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});
