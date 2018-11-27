// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import FiberNew from "@material-ui/icons/FiberNew";
// core components/views
import DashboardsPage from "views/Dashboard/DashboardRouter";
import NewPage from "views/Dashboard/New.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard/new",
    sidebarName: "Crear un Thread",
    navbarName: "Crear un Opinion Thread",
    icon: FiberNew,
    component: NewPage
  },
  {
    path: "/dashboard/topic",
    sidebarName: "Threads",
    navbarName: "Opinion thread",
    icon: Dashboard,
    component: DashboardsPage
  },
  { redirect: true, path: "/dashboard", to: "/dashboard/new", navbarName: "Redirect" }
];

export default dashboardRoutes;
