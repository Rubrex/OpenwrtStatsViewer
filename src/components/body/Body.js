import React from "react";
import Home from "./Home/Home";
import Router from "./Router";
import ClientLists from "./UsersOnline/ClientLists";

import { Route, Redirect, Switch } from "react-router-dom";
function Body() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/clientlists" exact component={ClientLists} />
        <Route path="/router" exact component={Router} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default Body;
