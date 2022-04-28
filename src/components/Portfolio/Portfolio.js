import React, { useState } from "react";
import "./Portfolio.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from "../../data/projects.json";

export default function Portfolio() {
  const [cardList, setSelectedCard] = useState(projectData);
  return (
    <div className="card-flex">
      <section className="card-flex-item">
        {cardList.map((card) => {
          return (
            <ProjectCard
              name={card.name}
              key={card.name}
              description={card.description}
              github={card.github}
              deployment={card.deployment}
              tech={card.tech}
              image={card.image}
            />
          );
        })}
      </section>
    </div>
  );
}
