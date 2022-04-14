import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section className="about-container">
      <div className="about-holder">
        <div className="about-top">
          <img src="profile.jpg" alt="Profile picture"></img>

          <p className="about-me">
            Hi there, I'm a junior fullstack developer based in Manchester, NW
            U.K. <br></br>
            <br></br>I am a fast learner in posession of a passion to do good,
            and a keen problem-solving mind. I like to approach problems like a
            detective solving a mystery, working ceaselessly and methodically
            until a solution is reached.
            <br></br>
            <br></br>I am highly organised with critical attention to detail, so
            I have found my skills well suited to back-end development - but I
            also have a strong creative flair and enjoy building attractive,
            accessible, responsive designs.
          </p>
        </div>
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-holder">
          <p>
            <FontAwesomeIcon icon={faHtml5} />
            HTML5
          </p>
          <p className="skills">
            <FontAwesomeIcon icon={faCss3} />
            CSS
          </p>
          <p className="skills">
            <FontAwesomeIcon icon={faJsSquare} />
            Javascript
          </p>
          <p className="skills">
            <FontAwesomeIcon icon={faNodeJs} />
            Node
          </p>
          <p className="skills">
            <FontAwesomeIcon icon={faReact} />
            React
          </p>
        </div>
      </div>
    </section>
  );
}
