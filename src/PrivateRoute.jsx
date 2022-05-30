import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "Context";

export default function PrivateRoute() {
  // Get isAdmin
  const { isAdmin } = React.useContext(Context);

  // Render app or go to login
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
}
