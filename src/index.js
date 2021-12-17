
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import MooseAnalysis from "views/examples/MooseAnalysis.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import EveryField from "views/examples/EveryField.js";
import Dark1 from "views/index-sections/SectionDark.js";
import Hourofci from "views/examples/hourofci.js";
// others

ReactDOM.render(
  
  <HashRouter>
  <meta name="viewport" content="width=device-width" />
    <Switch>

      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/Dark1"
        render={(props) => <Dark1 {...props} />}
      />
      <Route
        path="/moose"
        render={(props) => <MooseAnalysis {...props} />}
      />
      <Route
        path="/hourofci"
        render={(props) => <Hourofci {...props} />}
      />
      {/* <Route
        path="/moose"
        render={(props) => <MooseAnalysis {...props} />}
      /> */}
      <Route
        path="/covid-dashboard"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/every-field"
        render={(props) => <EveryField {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
    </HashRouter>,
  document.getElementById("root")
);
