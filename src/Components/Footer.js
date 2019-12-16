import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <nav className="nav nav--footer">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="footer__link" href="https://github.com/OlgaPavlyuk/">
              Github
            </a>
          </li>
          <li className="nav__item">
            <a className="footer__link" href="https://www.figma.com/file/tRtdlPcgS602OuW5rPSooB/Eggplore-Style-Guide---Freebie-(Copy)?node-id=0%3A1">
              Design
            </a>
          </li>
          <li className="nav__item">
            <Link to='/about/' className="footer__link">About me</Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
