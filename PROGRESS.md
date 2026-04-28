# Progress Log - Theme Toggler (Base Setup)

## Project Overview

A simplified React playground for practicing `useReducer` and `useContext`.

## Current State

- **Logic**: Uses standard `useState` for theme switching.
- **UI**: Minimal centered layout with a toggle button.
- **Theming**: CSS variables driven by `.light` and `.dark` classes on a wrapper div.

## Files

- `src/App.jsx`: Contains the core logic and UI structure.
- `src/index.css`: Contains the base styles and theme variables.

## Next Step for User

- Refactor `useState` in `App.jsx` to use `useReducer`.

## Learnings

### Context

- Create a context in the main top-level component using `createContext(null)`.
- Set the context using `<Context.Provider value={"stateValue"}>` and pass it to the children.
- From the children, access the context using `useContext(OurContext)` and use the state value as needed.

### Reducer

- The `useReducer(reducerFunction, initialState)` function accepts two arguments: the reducer function and the initial state.
- The `reducer` function accepts two arguments, `state` and `action`, where the action describes what is needed from the dispatcher that is calling this function.
- `useReducer` returns an array `[state, dispatch]`, where `dispatch` calls the `reducer` function when an action is dispatched.
- The reducer function generally uses `switch` statements and returns the new state, and it should also have a default return.
- Dispatch is called, for example, in `onClick={() => {dispatch({ type: "action" })}}` and can be used from anywhere inside the application, making state usage easy, compact, effective, and clean.
