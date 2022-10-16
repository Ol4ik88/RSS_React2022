import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'pages/Home';
import userEvent from '@testing-library/user-event';

const localStorageMock = {
  setItem: jest.fn(),
  getItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Search', () => {
  test('renders search input', () => {
    render(<Home />);
    const input = screen.getByTestId('Search');
    expect(input).toBeInTheDocument();
  });

  test('renders input value empty if LocalStorage empty', () => {
    render(<Home />);
    const input = screen.getByTestId('Search');
    expect(input).toHaveValue('');
  });
});

describe('Local Storage', () => {
  test('renders input value if LocalStorage contain it', () => {
    render(<Home />);
    expect(localStorageMock.getItem).toHaveBeenCalledTimes(1);
  });

  test('renders input after unmount', () => {
    const { unmount } = render(<Home />);
    const input = screen.getByPlaceholderText(/Enter/i);

    userEvent.type(input, 'localStorage Item');
    expect(input).toContainHTML('localStorage Item');

    localStorageMock.setItem('Search', 'localStorage Item');
    unmount();
    expect(input).toContainHTML('localStorage Item');
  });
});