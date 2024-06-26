import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./Index.css";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
