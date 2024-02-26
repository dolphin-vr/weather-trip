import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";

const theme = {
  colors: {
    background: "#efefef",
    white: "#ffffff",
    gray: "#8A8A89",
    mediumgray: "#363535",
    lightgray: "#f9f9f9",
    blue: "#3470FF",
    activeblue: "#0B44CD",
  },
  radii: {
    sm: "4px",
    lm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
  spacing: (value) => `${value * 4}px`,
  effect: {
    cubic: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
