import { isLogin } from "utils";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent }: any) => {
  if (isLogin()) {
    return <RouteComponent />;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
