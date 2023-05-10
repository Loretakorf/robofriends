import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hello from "./Hello";
import reportWebVitals from "./reportWebVitals";
import 'tachyons'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hello  greeting={'Hello React Ninja'}/>
  </React.StrictMode>
);

reportWebVitals();
