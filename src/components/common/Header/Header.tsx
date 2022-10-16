import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  state = {
    currentPage: 'Home page',
  };
  getNamePage(namePage: string) {
    this.setState({ ...this.state, currentPage: namePage });
  }
  render() {
    return (
      <header className="header container">
        <h1>{this.state.currentPage}</h1>
        <NavLink
          end
          to="/"
          className="link"
          data-testid="home-link"
          onClick={() => this.getNamePage('Home page')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="link"
          data-testid="about-link"
          onClick={() => this.getNamePage('About page')}
        >
          About
        </NavLink>
        <NavLink
          end
          to="/form"
          className="link"
          data-testid="form-link"
          onClick={() => this.getNamePage('Form page')}
        >
          Form
        </NavLink>
      </header>
    );
  }
}

export default Header;
