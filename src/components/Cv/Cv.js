import React from "react";
import "./Cv.css";
import CvURL from "./VB-CV-23.pdf";
import CvImg from "./CV-preview2.JPG";
import Skills from "../../data/skills.json";

function Cv() {
  return (
    <section className="resume-wrapper">
      <div className="cv-container">
        <h2 className="cv-title">Preview (Page 1/2)</h2>
        <a href={CvURL} target="_blank" rel="noreferrer">
          <img className="cv-preview" alt="cv page 1 preview" src={CvImg}></img>
        </a>
        <p className="download-cv">
          <a href={CvURL} target="_blank" rel="noreferrer">
            <h2 className="download-link">View/Download</h2>
          </a>
        </p>
      </div>
      <div className="skills-holder">
        <h2 className="skills-title">Experienced in...</h2>
        <ul className="skill-list">
          {Skills.map((skill) => (
            <li key={skill.id}>{skill.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Cv;
