import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../App';
import userEvent from '@testing-library/user-event';

describe('Renders header-component', () => {
  test('renders header', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const headerMenu = screen.getByRole('banner');
    expect(headerMenu).toBeInTheDocument();
  });
  test('renders all links', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });
  test('renders current page name', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const homePageLink = screen.getByTestId('home-link');
    const aboutPageLink = screen.getByTestId('about-link');

    userEvent.click(homePageLink);
    const curPageHome = screen.getByText('Home page');
    expect(curPageHome).toBeInTheDocument();

    userEvent.click(aboutPageLink);
    const curPageAbout = screen.getByText('About page');
    expect(curPageAbout).toBeInTheDocument();
  });
});
