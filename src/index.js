import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import store from "./store";
import "./index.css";
import AppContainer from "./containers/AppContainer";


ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
