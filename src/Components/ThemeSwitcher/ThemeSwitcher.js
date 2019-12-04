import React, { useState, useEffect, useRef } from 'react';
import SettingsIcon from '../../Icons/SettingsIcon';
import './themeSwitcher.css';

const themeColors = ['purple', 'hot-pink', 'orange', 'green', 'blue', 'yellow', 'pink'];

const ThemeSwitcher = (props) => {
  const [ shownSwitcher, setShownSwitcher ] = useState('hidden');
  const [ currentTheme, setTheme ] = useState(props.theme);
  const ref = useRef();

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target) && shownSwitcher === 'active') {
      return setShownSwitcher('hidden');
    }
  }

  useEffect(() => {
    /* ThemeSwitcher is always rendered, addEventListener always active ;-( */
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const toogleSwitcherState = () => {
    return setShownSwitcher(shownSwitcher === 'active' ? 'hidden' : 'active');
  }

  const onChangeRadio = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    props.onChangeTheme(newTheme);
  }

  const renderThemeItems = (theme) => {
    return (
      <li className={`theme-switcher__item ${theme}`} key={theme}>
        <label className="theme-switcher__title checkbox">
          <input
            type="radio"
            name="theme-color"
            value={theme}
            onChange={onChangeRadio}
            checked={theme === currentTheme }
          />
          <span className="theme-switcher__bullet"></span>
          {theme}
        </label>
      </li>
    );
  }

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
}

export default ThemeSwitcher;