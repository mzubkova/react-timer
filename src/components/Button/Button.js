import React from "react";
// import { ThemeContext } from "../Context/ThemeContext";
import "./Button.scss";

const Button = () => {
  // const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} />
  );
};

export default Button;
