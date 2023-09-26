import { Navigate, useLocation } from "react-router-dom";

export const PublicRoute = ({ component: RouteComponent }: any) => {
  return <RouteComponent />;
};

export default PublicRoute;
