import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Portfolio</h2>
      <h3>Each project is a unique piece of development</h3>
      <div className="container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

function ProjectCard() {
  return <div className="project-card">Project here</div>;
}
