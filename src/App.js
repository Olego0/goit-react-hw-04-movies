import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";
class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<Loader />}>
          <Navigation />
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
