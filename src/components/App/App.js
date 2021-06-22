import React, { useState } from "react";

import Timer from "../Timer";
import Header from "../Header";

import { ThemeContext } from "../Context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  return (
    <>
      <ThemeContext.Provider value={value}>
        <Header />
        <Timer />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
