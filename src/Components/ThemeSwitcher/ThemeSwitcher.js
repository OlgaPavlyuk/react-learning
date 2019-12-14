import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import SettingsIcon from '../../Icons/SettingsIcon';
import './themeSwitcher.css';
import { changeThemeAction } from '../../actions/actions';

const mapStateToProps = ({ theme }) => ({
  currentTheme: theme.colorTheme,
});

const actionCreators = {
  changeTheme: changeThemeAction,
};

const themeColors = ['purple', 'hot-pink', 'orange', 'green', 'blue', 'yellow', 'pink'];

const ThemeSwitcher = (props) => {
  const [shownSwitcher, setShownSwitcher] = useState('hidden');
  const { currentTheme, changeTheme } = props;
  const ref = useRef();

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target) && shownSwitcher === 'active') {
      return setShownSwitcher('hidden');
    }
    return false;
  }

  useEffect(() => {
    /* ThemeSwitcher is always rendered, addEventListener always active ;-( */
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const toogleSwitcherState = () => setShownSwitcher(shownSwitcher === 'active' ? 'hidden' : 'active');

  const onChangeRadio = (e) => {
    const newTheme = e.target.value;
    changeTheme(newTheme);
  };

  const renderThemeItems = (itemTheme) => (
    <li className={`theme-switcher__item ${itemTheme}`} key={itemTheme}>
      <label className="theme-switcher__title checkbox">
        <input
          type="radio"
          name="theme-color"
          value={itemTheme}
          onChange={onChangeRadio}
          checked={itemTheme === currentTheme}
        />
        <span className="theme-switcher__bullet"></span>
        {itemTheme}
      </label>
    </li>
  );

  return (
    <div className="theme-switcher" ref={ref}>
      <button className="theme-switcher__btn" onClick={toogleSwitcherState}>
        <SettingsIcon width="1.375rem" height="1.375rem" />
      </button>
      <ul className={`theme-switcher__list ${shownSwitcher}`}>
        {themeColors.map(renderThemeItems)}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(ThemeSwitcher);
