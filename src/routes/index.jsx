import { Route, Switch } from "react-router-dom";
import Cart from "../components/Cart";
import Home from "../pages/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;
