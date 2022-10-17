import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../../App';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('<Header />', () => {
  test('should render header', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const headerMenu = screen.getByRole('banner');
    expect(headerMenu).toBeInTheDocument();
  });
  test('should render all links', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });
  test('should render current home name', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const homePageLink = screen.getByText('Home');

    userEvent.click(homePageLink);
    const curPageHome = screen.getByText('Home page');
    expect(curPageHome).toBeInTheDocument();
  });
  test('should render current about name', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const aboutPageLink = screen.getByText('About');

    userEvent.click(aboutPageLink);
    const curPageAbout = screen.getByText('About page');
    expect(curPageAbout).toBeInTheDocument();
  });
  test('should render current form name', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const formPageLink = screen.getByText('Form');

    userEvent.click(formPageLink);
    const curPageHome = screen.getByText('Form page');
    expect(curPageHome).toBeInTheDocument();
  });
});
