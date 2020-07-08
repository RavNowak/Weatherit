import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainWeatherComponent from "../MainWeatherComponent/MainWeatherComponent";

const AppComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MainWeatherComponent} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppComponent;
