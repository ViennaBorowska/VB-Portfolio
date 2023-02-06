import React from "react";
import { NavLink } from "react-router-dom";
import CvURL from "./VB-CV-23.pdf";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="header">
      <div className="nav-header-container">
        <div className="home-btn-container">
          <NavLink to="/" className="header-title" activeclassname="active">
            <button className="home-btn">V</button>
          </NavLink>
        </div>
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
