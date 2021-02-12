import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../auth/UserContext";

const GuardedRoutes = ({ exact, path, children }) => {
  const { currentUser } = useContext(UserContext);

  // console.log("FROM GR");
  // console.log(`currentUser: ${currentUser}`);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  )
}

export default GuardedRoutes;