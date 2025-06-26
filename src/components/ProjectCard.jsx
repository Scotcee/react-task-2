import React from "react";
import "../styles/ProjectCard.css";
import Button from "./Button";

function ProjectCard({ image, title, description }) {
  return (
    <div>
      <div className="project-card-wrapper">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <Button
            className="view-more-button"
            text="View More"
            style={{ border: "1px solid white " }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
