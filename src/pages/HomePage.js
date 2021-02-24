import React from "react";
import { Switch, Route } from "react-router-dom";
import History from "../components/History";
import Tablist from "../components/Tablist";
import Home from "../components/Home";

function HomePage({ match }) {
  return (
    <div className="max-w-5xl mx-auto pt-10">
      <Tablist />
      <Switch>
        <Route path={match.url + "history"} component={History} />
        <Route path={match.url + "/"} component={Home} />
      </Switch>
    </div>
  );
}

export default HomePage;
