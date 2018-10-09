import React from "react";

import { Switch, Route } from "react-router-dom";

import Dashboards from "views/Dashboard/Dashboards";

class DashboardsRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route from="/dashboard/topic/:id" component={Dashboards}/>
      </Switch>
    );
  }
}

export default DashboardsRouter;
