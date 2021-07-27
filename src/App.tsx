import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./pages/HomeView";

function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
