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
    const homePageLink = screen.getByText('Home');

    userEvent.click(homePageLink);
    expect(screen.getByText(/HomePage/i)).toBeInTheDocument();
  });

  test('renders about page', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const aboutPageLink = screen.getByText('About');

    userEvent.click(aboutPageLink);
    expect(screen.getByText(/AboutPage/i)).toBeInTheDocument();
  });

  test('renders form page', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const formPageLink = screen.getByText('Form');

    userEvent.click(formPageLink);
    expect(screen.getByText(/FormPage/i)).toBeInTheDocument();
  });

  test('page not found', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-page']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
