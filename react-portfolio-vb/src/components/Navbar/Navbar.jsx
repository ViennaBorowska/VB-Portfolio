import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="header">
      <div className="nav-header-container">
        <h1>Vienna B</h1>

        <div className="nav-container">
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
          <NavLink to="/portfolio" activeclassname="active">
            Projects
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
          <NavLink to="/cv" activeclassname="active">
            CV
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
