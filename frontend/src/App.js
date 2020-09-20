import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Createaccount from "./Components/Createaccount";
import Index from "./Components/Index";
function App() {
  return (
    <Router>
      <Switch>
        {/*<Route path="/login">
          <Login />
  </Route>
        <Route path="/createaccount">
          <Createaccount />
  </Route>*/}
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
