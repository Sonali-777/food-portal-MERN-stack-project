import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Components
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import PizzaItems from "./components/PizzaItems/PizzaItems";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" component={Menu} exact />
          <Route path="/pizza" component={PizzaItems} exact />
          <Route path="/burger" component={PizzaItems} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
