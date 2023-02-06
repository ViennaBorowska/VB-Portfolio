import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const isDeployed = props.deployment;
  return (
    <article className="card-flex-wrapper">
      <h3 className="project-title">{props.name}</h3>
      <div className="project-card-flex-image">
        {isDeployed ? (
          <a href={props.deployment} target="_blank" rel="noreferrer">
            <img
              className="project-image"
              src={process.env.PUBLIC_URL + props.image}
              alt="img placeholder"
            />
          </a>
        ) : (
          <a href={props.github} target="_blank" rel="noreferrer">
            <img
              className="project-image"
              src={process.env.PUBLIC_URL + props.image}
              alt="img placeholder"
            />
          </a>
        )}
      </div>
      <div className="card-flex-content">
        <p>{props.description}</p>
        <div className="icon-holder">
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="card-github"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              title="Repository Link"
            />
          </a>

          {isDeployed ? (
            <a
              href={props.deployment}
              target="_blank"
              rel="noreferrer"
              className="card-deployment"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                title="Deployed Link"
              />
            </a>
          ) : (
            ""
          )}
        </div>
        <p className="tech-holder">{props.tech}</p>
      </div>
    </article>
  );
}

export default Card;
