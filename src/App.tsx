import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./pages/HomeView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
