import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";

const theme = {
  colors: {
    background: "#f1f1f1",
    white: "#ffffff",
    black: "#111111",
    lightgray: "#c9c9c9",
    gray: "#a7a7a7",
    mediumgray: "#525252",
    darkgray: "#3f3f3f",
    blue: "#3470FF",
    activeblue: "#0b43c7",
    navy: "#04043d",
    red: "#c00000",
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
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
