import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main-page.css';

function MainContent() {
  return (
    <nav className="main-page__nav">
      <ul className="main-page__list">
        <li className="main-page__item">
          <h3 className="h3">Show all cards</h3>
          <table className="main-page__table">
            <thead>
              <tr>
                <th>Front</th>
                <th>Back</th>
                <th>Status</th>
                <th>Themes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Я устал ждать</td>
                <td>I'm tired of waiting</td>
                <td>known</td>
                <td>
                  <div className="tag">preposition</div>
                </td>
              </tr>
              <tr>
                <td>Мне позвонили вчера</td>
                <td>I was called yesterday</td>
                <td>repeat</td>
                <td>
                  <div className="tag">passive</div>
                </td>
              </tr>
              {/* <tr>
                <td>Будет дождливо?</td>
                <td>Will it be rainy?</td>
                <td>known</td>
                <td>
                  <div className="tag">to be</div>
                </td>
              </tr> */}
            </tbody>
          </table>
          <Link to='/cards/' className="main-page__link main-page__link--faded"></Link>
        </li>
        <li className="main-page__item">
          <h3 className="h3">Learn cards</h3>
          <div className="fake-card">
            <div className="fake-card__inner fake-card__front">
              <div className="fake-card__text">Я устал ждать</div>
              <button className="btn btn-primary fake-card__btn">Flip</button>
            </div>
            <div className="fake-card__inner fake-card__back">
              <div className="fake-card__text">I'm tired of waiting</div>
              <button className="btn btn-inverse fake-card__btn">Hard</button>
              <button className="btn btn-primary fake-card__btn">Easy</button>
            </div>
          </div>
          <Link to='/learn/' className="main-page__link"></Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainContent;
