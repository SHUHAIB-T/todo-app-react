import React from "react";
import ReactDOM from "react-dom/client";
import TodoWrapper from "./components/TodoWrapper.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoWrapper />
  </React.StrictMode>
);