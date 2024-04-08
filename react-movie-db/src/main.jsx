import React from "react";
import ReactDOM from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SkeletonTheme baseColor="#999" highlightColor="#2583eb50">
        <App />
      </SkeletonTheme>
    </BrowserRouter>
  </React.StrictMode>
);
