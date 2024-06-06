import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@syncfusion/ej2-base/styles/bootstrap5.css";
import "@syncfusion/ej2-react-grids/styles/bootstrap5.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import NormalizeStyles from "./styles/NormalizeStyles";
import SyncfusionCustomStyles from "./styles/SyncfusionCustomStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NormalizeStyles />
      <SyncfusionCustomStyles />

      <App />
    </ThemeProvider>
  </React.StrictMode>
);
