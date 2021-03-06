import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import NProgress from "nprogress";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink style={{ fontWeight: "bolder" }}>{APP_NAME}</NavLink>
        </Link>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!isAuth() && (
                <>
                  <NavItem>
                    <Link href="/signin">
                      <NavLink style={{ cursor: "pointer" }}>Signin</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/signup">
                      <NavLink style={{ cursor: "pointer" }}>Signup</NavLink>
                    </Link>
                  </NavItem>
                </>
              )}

              {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <Link href="/user">
                    <NavLink style={{ cursor: "pointer" }}>
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                  </Link>
                </NavItem>
              )}
              {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <Link href="/admin">
                    <NavLink style={{ cursor: "pointer" }}>
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                  </Link>
                </NavItem>
              )}
              {isAuth() && (
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    onClick={() => signout(() => Router.push(`/signin`))}
                  >
                    Signout
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
