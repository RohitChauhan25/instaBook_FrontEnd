import { IRoute } from "Interfaces";
import Login from "pages/Auth/login";
import Home from "pages/Home";

export const HomeRoute = {
  component: Home,
  path: "/",
  exact: true,
  restricted: true,
};

export const LoginRoute = {
  component: Login,
  path: "/login",
  exact: true,
  restricted: false,
};

const ROUTES: IRoute[] = [LoginRoute, HomeRoute];

export default ROUTES;
