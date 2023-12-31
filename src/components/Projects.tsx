import React from "react";

import projectsArr from "../assets/projects/projects";
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
        <h3>Each project is a unique piece of development</h3>
        <div className="container">
          {projectsArr.map((projectObj) => {
            return <ProjectCard projectObj={projectObj} />;
          })}
        </div>
      </div>
    </section>
  );
}

interface Project {
  name: string;
  description: string;
  getDescriptionArr: () => string[];
  thumbnail: string;
  repository: string;
  live: string;
  technologies: Array<string>;
}

function ProjectCard({ projectObj }: { projectObj: Project }) {
  return (
    <div className="subcontainer">
      <div className="project-card">
        <div className="thumbnail">
          <img src={projectObj.thumbnail} />
        </div>
        <div className="description">
          <h3>{projectObj.name}</h3>
          <p>{projectObj.description}</p>
          <ul className="technologies">
            {projectObj.technologies.map((technology) => (
              <li>{technology}</li>
            ))}
          </ul>
          <ul className="links">
            <li>
              <a href={projectObj.repository} rel="noreferrer" target="_blank">
                <span>Code </span>
                <img src={githubLogo} alt="" />
              </a>
            </li>
            <li>
              <a href={projectObj.live} rel="noreferrer" target="_blank">
                <span>Live Demo</span> <img src={newWindow} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
