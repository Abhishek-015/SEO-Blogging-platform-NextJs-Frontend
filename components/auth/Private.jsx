//this file is created to protect the route of logged in user, vary same as layout component
import { useEffect } from "react";
import Router from "next/router";
import { isAuth } from "../../actions/auth";

const Private = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push(`/signin`);
    }
  }, []);

  return <>{children}</>;
};

export default Private;
