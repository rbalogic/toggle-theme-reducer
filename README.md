# Toggle Theme (useReducer)

A small React + Vite practice project that demonstrates:

- theme switching with `useReducer`
- cross-component state sharing with `useContext`
- fetching latest repository activity from the GitHub API
- responsive side-by-side layout for Theme and Repo panels

## Features

- Toggle between `Light` and `Dark` themes using a reducer action.
- Share the active theme via `ThemeContext`.
- Display the latest public event from:
  - `rbalogic/toggle-theme-reducer`
- Render two panels side by side on desktop and stack on smaller screens.

## Tech Stack

- React
- Vite
- JavaScript (JSX)
- CSS variables for theming

## Project Structure

```text
src/
  App.jsx           # Reducer state + context provider
  Theme.jsx         # Theme UI and toggle button
  Repos.jsx         # Fetches and renders latest GitHub repo activity
  ThemeContext.js   # Shared React context
  index.css         # Theme variables and responsive layout
```

## How It Works

1. `App.jsx` manages theme state with `useReducer`.
2. The active theme (`Light` or `Dark`) is provided through `ThemeContext.Provider`.
3. `Theme.jsx` consumes context, applies theme classes, and dispatches toggle action.
4. `Repos.jsx` consumes context and fetches latest repo event from GitHub on mount.
5. `index.css` applies theme colors and desktop/mobile layout behavior.

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## Notes

- GitHub API requests in `Repos.jsx` use public endpoints and can be rate-limited.
- Theme values are title-cased (`Light`/`Dark`) and converted to lowercase for CSS class names.
