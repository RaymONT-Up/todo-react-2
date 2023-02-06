import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./vars.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import TodosContextProvider from "./store/todos-context.js/TodosContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>
);

reportWebVitals();
