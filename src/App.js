import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from "./Components/Header/Header";

export default () => (
  <Router>
    <Fragment>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </Fragment>
  </Router>
);
