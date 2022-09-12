import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ActiveUser } from "../../contexts/contexts";

const UserRoute = () => {
  const { user } = React.useContext(ActiveUser);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default UserRoute;
