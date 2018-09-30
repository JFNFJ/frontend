import React from "react";
import Navbar from "views/Navbar/Navbar";

import { Switch, Route, Redirect } from "react-router-dom";

import landingRoutes from "routes/landing.jsx";

const switchRoutes = (
  <Switch>
    {landingRoutes.map((prop, key) => {
      if (prop.resdirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>{switchRoutes}</div>
      </div>
    );
  }
}

App.propTypes = {
};

export default App;
