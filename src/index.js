import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GobalState from "./context/states/gobalState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GobalState>
      <App />
    </GobalState>
  </React.StrictMode>
);
