import { render, screen } from '@testing-library/react';
import FormPage from 'pages/FormPage';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('<Form/>', () => {
  test('should render form-component', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});
