import React from "react";

import projectsData from "../assets/data/projects.json";
import githubLogo from "../assets/links/github.svg";
import newWindow from "../assets/newWindow.svg";
import backgroundStroke from "../assets/strokes/background-stroke.png";
export default function Projects() {
  return (
    <section id="projects">
      <div className="background"></div>
      <div className="content">
        <img className="background-stroke first" src={backgroundStroke} />
        <img className="background-stroke second" src={backgroundStroke} />

        <h2>Portfolio</h2>
        <h3>Estos son algunos de mis mejores projectos </h3>
        <div className="container">
          {projectsData.map((projectData) => {
            return <ProjectCard projectData={projectData} />;
          })}
        </div>
      </div>
    </section>
  );
}

interface Project {
  name: string;
  description: string;

  thumbnail: string;
  repository: string;
  live: string;
  technologies: Array<string>;
}

function ProjectCard({ projectData }: { projectData: Project }) {
  return (
    <div className="project-card">
      <div className="thumbnail">
        <img src={projectData.thumbnail} alt="" />
      </div>

      <div className="description">
        <h3>{projectData.name}</h3>
        <p>{projectData.description}</p>
        <ul className="technologies">
          {projectData.technologies.map((technology) => (
            <li>{technology}</li>
          ))}
        </ul>
        <ul className="links">
          <li>
            <a href={projectData.repository} rel="noreferrer" target="_blank">
              <span>Code </span>
              <img src={githubLogo} alt="" />
            </a>
          </li>
          <li>
            <a href={projectData.live} rel="noreferrer" target="_blank">
              <span>Ir a ver</span> <img src={newWindow} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
