import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const isDeployed = props.deployment;
  return (
    <article className="card-flex-wrapper">
      <div className="card-flex-image">
        <img src={props.image} alt="img placeholder" />
      </div>
      <div className="card-flex-content">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className="icon-holder">
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="card-github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          {isDeployed ? (
            <a
              href={props.deployment}
              target="_blank"
              rel="noreferrer"
              className="card-deployment"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
