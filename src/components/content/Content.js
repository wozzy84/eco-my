import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import DodajZbiorke from "../dodajzbiorke/DodajZbiorke";
import Find from "../znajdzzbiorke/Find";
import Give from '../oddaj/Give'


const Content = () => {
  return (
      <BrowserRouter>
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/dodaj-zbiorke" component={DodajZbiorke} />
      <Route path="/znajdz" component={Find} />
      <Route path="/oddaj" component={Give} />
    </Switch>
      </BrowserRouter>
  );
};

export default Content;
