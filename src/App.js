import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
import { Router } from "react-router-dom";
import Content from "./components/content/Content";
import history from "./browserHistory";
import { GlobalStyle } from "./components/atoms/styles";
import React from "react";

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Content />
    </Router>
  );
}

export default App;
