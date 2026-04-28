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

- Create a context in the main top level compoent using `createContext(null)`
- Set the context using `<Context.Provider value={"stateValue"}>` and pass it along the children
- Frpom the children acces the context using `useContext(OurContext)` and set the state value as needed

### Reducer

- `useReducer(reducerFunction, initialState)` function accepts two arguements, the reducer functon and the intial state
- The `reducer` function accept two arguements `state` and `action` where the action says what is needed from the dispatcher who is calling this function.
- The `useReducer` returns an array `[state, dispatch]` where dispatch calls the `reducer` fucntion when dispatched.
- The reduver function generally used swtich statements and reutnrs the new state and must have a default return too
- The dispatch is called with for example in `onClick={() => {dispacth({type: "action"})}}` and can be used from wherever inside the application as needed thus making the sate usage easy, compact, effective and clean.
