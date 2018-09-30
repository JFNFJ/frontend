// @material-ui/icons
import Person from "@material-ui/icons/Person";
// core components/views

import LoginPage from "views/LoginPage/LoginPage"
import Signup from "views/Signup/Signup";
import Landing from "views/Landing/Landing"


const landingRoutes = [
  {
    path: "/login",
    sidebarName: "Log in",
    navbarName: "Log in",
    icon: Person,
    component: LoginPage
  },
  {
    path: "/signup",
    sidebarName: "Signup",
    navbarName: "Signup",
    icon: Person,
    component: Signup
  },
  {
    path: "/",
    navbarName: "Social Cat",
    component: Landing
  }
];

export default landingRoutes;
