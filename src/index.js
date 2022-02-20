
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import SolapProject from "views/examples/SolapProject.js";
import MooseAnalysis from "views/examples/MooseAnalysis.js";
import EveryField from "views/examples/EveryField.js";
import Hourofci from "views/examples/hourofci.js";
import { HelmetProvider } from "react-helmet-async";
// others
// import 'babel/polyfill';
import "babel-polyfill";

ReactDOM.render(
  
  <HelmetProvider>
  <HashRouter>
  <meta name="viewport" content="width=device-width" />
    <Switch>

      <Route path="/index" render={(props) => <Index {...props} />} />
     
      <Route
        path="/moose"
        render={(props) => <MooseAnalysis {...props} />}
      />
      <Route
        path="/hourofci"
        render={(props) => <Hourofci {...props} />}
      />
      <Route
        path="/covid-dashboard"
        render={(props) => <SolapProject {...props} />}
      />
      <Route
        path="/every-field"
        render={(props) => <EveryField {...props} />}
      />
      
      <Redirect to="/index" />
    </Switch>
    </HashRouter>
    </HelmetProvider>,
  document.getElementById("root")
);
