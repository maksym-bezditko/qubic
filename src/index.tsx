import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@syncfusion/ej2-base/styles/bootstrap5.css";
import "@syncfusion/ej2-react-grids/styles/bootstrap5.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
