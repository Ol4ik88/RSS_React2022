import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

describe('Router', () => {
  test('renders home page', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const homePageLink = screen.getByTestId('home-link');

    userEvent.click(homePageLink);
    expect(screen.getByTestId('HomePage')).toBeInTheDocument();
  });

  test('renders about page', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const aboutPageLink = screen.getByTestId('about-link');

    userEvent.click(aboutPageLink);
    expect(screen.getByTestId('AboutPage')).toBeInTheDocument();
  });

  test('renders form page', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const formPageLink = screen.getByTestId('form-link');

    userEvent.click(formPageLink);
    expect(screen.getByTestId('FormPage')).toBeInTheDocument();
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
