import React from "react";
import "../styles/Projects.css";
import ProjectCard from "../components/ProjectCard";

import image1 from "../assets/images/our-project-10.png";
import image2 from "../assets/images/our-project-11.png";
import image3 from "../assets/images/our-project-12.png";

function Projects() {
  return (
    <div>
      <div className="projects-hero-bg">
        <h1>
          Our <br />
          <span>Projects</span>
        </h1>
        <div className="cards">
          <ProjectCard
            image={image1}
            title="Sample Project 1"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <ProjectCard
            image={image2}
            title="Sample Project 2"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <ProjectCard
            image={image3}
            title="Sample Project 3"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
