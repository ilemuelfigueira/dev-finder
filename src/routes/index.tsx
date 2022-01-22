import React from "react";

import { useAuth } from "hooks/useAuth";

import { SignRoutes } from "./SignRoutes";
import { UserRoutes } from "./UserRoutes";

const Routes = () => {
  const { signed } = useAuth();

  return signed == true ? <UserRoutes /> : <SignRoutes />;
};

export default Routes;
