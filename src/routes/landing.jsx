// @material-ui/icons
import Person from "@material-ui/icons/Person";
// core components/views

import LoginPage from "views/LoginPage/LoginPage"
import Signup from "views/Signup/Signup";
import Landing from "views/Landing/Landing"
import ResetPassword from "views/ResetPassword/ResetPassword";


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
    path: "/reset",
    sidebarName: "Olvidé mi contraseña",
    navbarName: "Olvidé mi contraseña",
    icon: Person,
    component: ResetPassword
  },
  {
    path: "/",
    navbarName: "Social Cat",
    component: Landing
  }
];

export default landingRoutes;
