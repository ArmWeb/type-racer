import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth from "./utils/auth";
import Home from "./home";
import LoginContainer from "./login";
import NotFound from "./notFound";
import Header from "./common/Header";

export default (
  <Router>
    <Route path="/" component={Header} />
    <Switch>
      <Route exact path="/" component={auth(Home)} />
      <Route path="/login" component={LoginContainer} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
