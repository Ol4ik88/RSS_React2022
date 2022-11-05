import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('Router', () => {
  test('should render home page', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const homePageLink = screen.getByText('Home');

    userEvent.click(homePageLink);
    expect(screen.getByText(/HomePage/i)).toBeInTheDocument();
  });

  test('should render about page', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const aboutPageLink = screen.getByText('About');

    userEvent.click(aboutPageLink);
    expect(screen.getByText(/AboutPage/i)).toBeInTheDocument();
  });

  test('should render form page', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
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
