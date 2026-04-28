import { useContext } from "react";
import Repos from "./Repos";
import { ThemeContext } from "./ThemeContext";

export const Theme = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`theme-wrapper ${theme.toLowerCase()}`}>
      <div className="container">
        <h1>Toggle Theme (useContext)</h1>
        <button onClick={toggleTheme}>Show {theme} Theme</button>
        <p>Current Theme: {theme}</p>
      </div>
      <div className="container">
        <Repos />
      </div>
    </div>
  );
};
