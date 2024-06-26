import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./Index.css";
import { Provider } from "react-redux";
import { store } from "./store";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
