import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "./Theme";

export const App = () => {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme((prevState) => {
      if (prevState === "Dark") {
        return "Light";
      } else {
        return "Dark";
      }
    });
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Theme toggleTheme={toggleTheme} />
    </ThemeContext.Provider>
  );
};

export default App;
