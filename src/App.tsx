import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./pages/HomeView/HomeView";
import ProductsView from "./pages/ProductsView";

function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/products">
            <ProductsView />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
