import { useContext } from "react";
import Repos from "./Repos";
import { ThemeContext } from "./ThemeContext";

export const Theme = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const nextTheme = theme === "Dark" ? "Light" : "Dark";
  return (
    <div className={`theme-wrapper ${theme.toLowerCase()}`}>
      <div className="container">
        <h1>Toggle Theme (useReducer)</h1>
        <button onClick={toggleTheme}>Show {nextTheme} Theme</button>
        <p>Current Theme: {theme}</p>
      </div>
      <div className="container">
        <Repos />
      </div>
    </div>
  );
};
