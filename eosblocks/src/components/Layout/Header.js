// Packages
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Header } from "semantic-ui-react";

// CSS
import "./css/Header.css";

// Header component
export const MainHeader = () => {
  return (
    <Fragment>
      <Header padded="very" className="nav-header">
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </Header>
    </Fragment>
  );
};
export default MainHeader;
