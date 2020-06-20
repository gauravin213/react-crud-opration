import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

import PropTypes from "prop-types";
const Navbar = ({ isLogedIn, onLogoutAction }) => {
  let history = useHistory();
  let button;
  if (isLogedIn) {
    button = (
      <NavLink to="/login" className="nav-link" onClick={onLogoutAction}>
        Logout
      </NavLink>
    );
  } else {
    button = (
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
    );
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">{button}</li>
          </ul>
        </div>
        <Link className="btn btn-outline-light" to="/users/add">
          Add User
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
