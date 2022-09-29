import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  state = {
    curPage: 'Home page',
  };
  getNamePage(namePage: string) {
    this.setState({ ...this.state, curPage: namePage });
  }
  render() {
    return (
      <header className="header container">
        <h1>{this.state.curPage}</h1>
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
      </header>
    );
  }
}

export default Header;
