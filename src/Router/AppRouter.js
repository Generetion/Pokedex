import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "../components/Card";
import GridContainer from "../components/GridContainer";
import Navbar from "../components/Navbar";
import CardInfo from "../components/CardInfo";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <GridContainer />
        </Route>
        <Route exact path={`/pokemon`} component={CardInfo}></Route>
      </Switch>
    </Router>
  );
}
