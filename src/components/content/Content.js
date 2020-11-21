import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import DodajZbiorke from "../dodajzbiorke/DodajZbiorke";
import Find from "../znajdzzbiorke/Find";
import history from "./browserHistory";

const Content = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/dodaj-zbiorke" component={DodajZbiorke} />
        <Route path="/znajdz" component={Find} />
      </Switch>
    </Router>
  );
};

export default Content;
