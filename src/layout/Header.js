// TODO: Navbar

import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

//importing Link from react-router-dom
import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      style={{ backgroundColor: "#121212", color: "#EAF0F1" }}
      expand="md"
      className="navbar-dark"
    >
      <NavbarBrand>
        <Link to="/" style={{ color: "#EAF0F1" }}>
          React Github App
        </Link>
      </NavbarBrand>
      <NavbarText>{context.user?.email ? context.user.email : " "}</NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => {
                  context.setUser(null);
                }}
                style={{ color: "#EAF0F1" }}
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" style={{ color: "#EAF0F1" }}>
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" style={{ color: "#EAF0F1" }}>
                  SignIn
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
