import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../../App';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import { Provider } from 'react-redux';
import { store } from 'store/store';

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
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });
  test('should render current home name', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const homePageLink = screen.getByText('Home');

    userEvent.click(homePageLink);
    const curPageHome = screen.getByText('Home page');
    expect(curPageHome).toBeInTheDocument();
  });
  test('should render current about name', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const aboutPageLink = screen.getByText('About');

    userEvent.click(aboutPageLink);
    const curPageAbout = screen.getByText('About page');
    expect(curPageAbout).toBeInTheDocument();
  });
  test('should render current form name', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const formPageLink = screen.getByText('Form');

    userEvent.click(formPageLink);
    const curPageHome = screen.getByText('Form page');
    expect(curPageHome).toBeInTheDocument();
  });
});
