import React from "react";
import { Nav, NavLink, NavIcon } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Grocery Store</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
