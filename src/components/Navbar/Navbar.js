import React from "react";
import { NavLink } from "react-router-dom";
import CvURL from "./VB-CV-23.pdf";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="header">
      <div className="nav-header-container">
        <NavLink to="/" className="header-title" activeclassname="active">
          <h1>Vienna B</h1>
        </NavLink>

        <div className="nav-container">
          <NavLink to="/" activeclassname="active">
            About
          </NavLink>
          <NavLink to="/portfolio" activeclassname="active">
            Projects
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
          <button className="cv-btn">
            <a href={CvURL} target="_blank" rel="noreferrer">
              CV
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
