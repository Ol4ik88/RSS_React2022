import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../../App';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Renders header-component', () => {
  test('renders header', () => {
    render(
      <Router>
        <Header />
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
    expect(links).toHaveLength(3);
  });
  test('renders current home name', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const homePageLink = screen.getByTestId('home-link');

    userEvent.click(homePageLink);
    const curPageHome = screen.getByText('Home page');
    expect(curPageHome).toBeInTheDocument();
  });
  test('renders current about name', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const aboutPageLink = screen.getByTestId('about-link');

    userEvent.click(aboutPageLink);
    const curPageAbout = screen.getByText('About page');
    expect(curPageAbout).toBeInTheDocument();
  });
  test('renders current form name', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const formPageLink = screen.getByTestId('form-link');

    userEvent.click(formPageLink);
    const curPageHome = screen.getByText('Form page');
    expect(curPageHome).toBeInTheDocument();
  });
});
