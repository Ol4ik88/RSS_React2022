import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  const [currentPage, setCurrentPage] = useState('Home page');
  return (
    <header className="header container">
      <h1>{currentPage}</h1>
      <NavLink end to="/" className="link" onClick={() => setCurrentPage('Home page')}>
        Home
      </NavLink>
      <NavLink to="/about" className="link" onClick={() => setCurrentPage('About page')}>
        About
      </NavLink>
      <NavLink end to="/form" className="link" onClick={() => setCurrentPage('Form page')}>
        Form
      </NavLink>
    </header>
  );
}

export default Header;
