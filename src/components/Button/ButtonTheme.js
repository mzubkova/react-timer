import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../Context/ThemeContext";

import "./ButtonTheme.scss";

const ButtonTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleThemeMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button className="switcher-btn" onClick={toggleThemeMode}>
      {theme === "dark" ? "Light" : "Dark"} theme
    </button>
  );
};

ButtonTheme.propTypes = {
  onButtonClick: PropTypes.func,
};

export default ButtonTheme;
