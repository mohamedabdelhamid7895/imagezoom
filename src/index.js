import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import UsersData from './Api'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <UsersData/>
  </React.StrictMode>,
  rootElement
);