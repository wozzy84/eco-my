import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import DodajZbiorke from "../dodajzbiorke/DodajZbiorke";
import Find from "../znajdzzbiorke/Find";


const Content = () => {
  return (
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/dodaj-zbiorke" component={DodajZbiorke} />
      <Route path="/znajdz" component={Find} />
    </Switch>
  );
};

export default Content;
