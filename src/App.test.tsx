import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

describe('Router', () => {
  test('renders pages', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const homePageLink = screen.getByTestId('home-link');
    const aboutPageLink = screen.getByTestId('about-link');

    userEvent.click(homePageLink);
    expect(screen.getByTestId('HomePage')).toBeInTheDocument();

    userEvent.click(aboutPageLink);
    expect(screen.getByTestId('AboutPage')).toBeInTheDocument();
  });

  test('page not found', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-page']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('PageNotFound')).toBeInTheDocument();
  });
});
