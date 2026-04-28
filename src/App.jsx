import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("default");

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
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default App;
