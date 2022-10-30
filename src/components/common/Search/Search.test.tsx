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
  test('should render search input', () => {
    render(<Home />);
    const input = screen.getByTestId('Search');
    expect(input).toBeInTheDocument();
  });

  test('should render input value empty if LocalStorage empty', () => {
    render(<Home />);
    const input = screen.getByTestId('Search');
    expect(input).toHaveValue('');
  });
});

describe('Local Storage', () => {
  test('should render input value if LocalStorage contain it', async () => {
    render(<Home />);
    setTimeout(() => {
      expect(localStorageMock.getItem).toHaveBeenCalledTimes(1);
    }, 0);
  });

  test('should render input after unmount', async () => {
    const { unmount } = render(<Home />);
    const input = screen.getByPlaceholderText(/Enter/i);

    userEvent.type(input, 'localStorage Item');
    localStorageMock.setItem('Search', 'localStorage Item');
    unmount();
    (async () => {
      expect(await screen.findByText('localStorage Item')).toBeInTheDocument();
    })();
  });
});
