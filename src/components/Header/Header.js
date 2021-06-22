import React, { useContext } from "react";
import PropTypes from "prop-types";

import ButtonTheme from "../Button";

import { ThemeContext } from "../Context/ThemeContext";

import "./Header.scss";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleThemeMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className={`header header--${theme}`}>
      <ButtonTheme></ButtonTheme>
    </div>
  );
};

Header.propTypes = {
  toggleThemeMode: PropTypes.func,
};

export default Header;
