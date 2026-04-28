import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => {
      if (prevState === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  };

  return (
    <div className={`theme-wrapper ${theme}`}>
      <div className="container">
        <h1>Theme Toggler</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p>Current Theme: {theme}</p>
      </div>
    </div>
  );
};

export default App;
