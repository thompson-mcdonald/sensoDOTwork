import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Home from './Pages/Home';
import Info from './Pages/Info';
import Header from "./Components/Header/Header";

export default () => (
  <Router>
    <Fragment>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/info" component={Info} />
        </Switch>
    </Fragment>
  </Router>
);
