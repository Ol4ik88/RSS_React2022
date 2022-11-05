import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from 'pages/FormPage';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('<Switcher />', () => {
  test('should render switcher-component', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const switcher = screen.getByText(/Gender:/i);
    expect(switcher).toBeInTheDocument();
  });
  test('should click toggle', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const switcher = screen.getByTestId('switcher');
    userEvent.click(switcher);
    expect(switcher).toBeChecked();
  });
});
