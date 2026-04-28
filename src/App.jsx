import { useCallback, useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "./Theme";

const ACTIONS = {
  TOGGLE_THEME: "toggle_theme",
};

const initialState = { theme: "Light" };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME:
      return {
        theme: state.theme === "Dark" ? "Light" : "Dark",
      };
    default:
      return state;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleToggleTheme = useCallback(() => {
    dispatch({ type: ACTIONS.TOGGLE_THEME });
  }, []);

  return (
    <ThemeContext.Provider value={state.theme}>
      <Theme toggleTheme={handleToggleTheme} />
    </ThemeContext.Provider>
  );
};

export default App;
