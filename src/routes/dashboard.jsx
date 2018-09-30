// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Home from "@material-ui/icons/Home";
import FiberNew from "@material-ui/icons/FiberNew";
// core components/views
import DashboardsPage from "views/Dashboard/Dashboards.jsx";
import HomePage from "views/Dashboard/Home.jsx";
import NewPage from "views/Dashboard/New.jsx";

import { getTopics } from "services/topics";

const dashboardRoutes = [
  {
    path: "/dashboard/new",
    sidebarName: "New OpinionThread",
    navbarName: "Create an Opinion thread",
    icon: FiberNew,
    component: NewPage
  },
  {
    path: "/dashboard/:term",
    sidebarName: "Threads",
    navbarName: "Opinion Thread result",
    threads: getTopics(),
    icon: Dashboard,
    component: DashboardsPage
  },
  { redirect: true, path: "/dashboard", to: "/dashboard/home", navbarName: "Redirect" }
];

export default dashboardRoutes;
