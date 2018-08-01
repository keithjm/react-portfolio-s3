import { Navbar, NavItem, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import React from "react";
const NavigationBar = props => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Jamie Keith</a>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav pullRight>
        <NavItem>
          <NavLink to="/about">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact Me</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);
export default NavigationBar;
