import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import { Testing } from "./pages/Testing.js";

const App = () => {
  return (
    <Router>
      <LogIn />
      <Switch>
        <Route path='/'>
          <Testing/>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {};

export default App;
