import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./pages/HomeView/HomeView";
import ProductDetail from "./pages/ProductDetail";
import ProductsView from "./pages/ProductsView";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/home">
            <HomeView />
          </Route>
          <Route exact path="/products">
            <ProductsView />
          </Route>
          <Route exact path="/products/:id">
            <ProductDetail />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
