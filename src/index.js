import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "./styles/custom-bootstrap.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

reportWebVitals();
