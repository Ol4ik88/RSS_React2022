import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'pages/Home';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const localStorageMock = {
  setItem: jest.fn(),
  getItem: jest.fn(),
};
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Search', () => {
  test('should render search input', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const input = screen.getByTestId('Search');
    expect(input).toBeInTheDocument();
  });

  test('should render input value empty if LocalStorage empty', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const input = screen.getByTestId('Search');
    expect(input).toHaveValue('');
  });
});

describe('Local Storage', () => {
  test('should render input value if LocalStorage contain it', async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    setTimeout(() => {
      expect(localStorageMock.getItem).toHaveBeenCalledTimes(1);
    }, 0);
  });

  test('should render input after unmount', async () => {
    const { unmount } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'localStorage Item');
    localStorageMock.setItem('Search', 'localStorage Item');
    unmount();
    expect(input).toHaveValue('localStorage Item');
  });
});
