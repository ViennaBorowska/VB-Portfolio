import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="social-media-contact">
          <div className="footer-link-holder">
            <a
              className="footer-links fa-2x"
              href="https://www.https://github.com/ViennaBorowska"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="footer-links fa-2x"
              href="https://www.linkedin.com/in/vienna-b-108b04229/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="footer-links fa-2x"
              href="https://mailto:viennabdev@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <p className="rights">{year} &copy; All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
