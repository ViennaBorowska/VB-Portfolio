import React from "react";
import { NavLink } from "react-router-dom";
import Navbarstyles from "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
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
      </div>
    </nav>
  );
}
