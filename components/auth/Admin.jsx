//this file is created to protect the route of logged in admin, vary same as layout component

import { useEffect } from "react";
import Router from "next/router";
import { isAuth } from "../../actions/auth";

const Admin = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push(`/signin`);
    } else if (isAuth().role !== 1) {
      Router.push(`/`);
    }
  }, []);

  return <>{children}</>;
};

export default Admin;
