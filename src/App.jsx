import { useState } from "react";

const THEMES = {
  light: "Light",
  dark: "Dark",
};

const App = () => {
  const [theme, setTheme] = useState({
    prevTheme: "dark",
    currTheme: "light",
  });

  const toggleTheme = () => {
    setTheme((prevState) => {
      if (prevState.currTheme === "dark") {
        return { prevTheme: prevState.currTheme, currTheme: "light" };
      } else {
        return { prevTheme: prevState.currTheme, currTheme: "dark" };
      }
    });
  };

  return (
    <div className={`theme-wrapper ${theme.currTheme}`}>
      <div className="container">
        <h1>Toggle Theme (useReducer)</h1>
        <button onClick={toggleTheme}>
          Show {THEMES[theme.prevTheme]} Theme
        </button>
        <p>Current Theme: {THEMES[theme.currTheme]}</p>
      </div>
    </div>
  );
};

export default App;
