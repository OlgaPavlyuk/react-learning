import React from 'react';
import { NavLink  } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink  to='/' activeClassName="active" className="nav__link" exact>Home</NavLink >
            </li>
            <li className="nav__item">
              <NavLink  to='/cards/' activeClassName="active" className="nav__link" exact>All cards</NavLink >
            </li>
            <li className="nav__item">
              <NavLink  to='/learn/' activeClassName="active" className="nav__link" exact>Learn</NavLink >
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;