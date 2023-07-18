import React from "react";
import { useState, useEffect, useRef } from "react";
export default function Projects({
  switchToVertical,
}: {
  switchToVertical: boolean;
}) {
  return (
    <section id="projects">
      <div className="background"></div>
      <div className="content">
        <h2>Portfolio</h2>
        <h3>Each project is a unique piece of development</h3>
        <div className="container">
          <ProjectCard switchToVertical={switchToVertical} />
          <ProjectCard switchToVertical={switchToVertical} />
          <ProjectCard switchToVertical={switchToVertical} />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ switchToVertical }: { switchToVertical: boolean }) {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    if (switchToVertical) {
      setStyles({ gridTemplateRows: "4fr 5fr" });
    } else {
      setStyles({ gridTemplateColumns: "5fr 4fr" });
    }
  }, [switchToVertical]);

  return (
    <div className="project-card" style={styles}>
      <div className="thumbnail">img</div>
      <div className="description">
        <h3>Tittle</h3>
        <p>
          Lorem ipsum dolor sit amet. <br />
          Lorem ipsum dolor sit amet. <br />
          Lorem ipsum dolor sit amet. <br />
          Lorem ipsum dolor sit amet. <br />
          Lorem ipsum dolor sit amet. <br />
        </p>
        <ul className="technologies">
          <li>React</li>
          <li>SCSS</li>
        </ul>
        <ul className="links">
          <li>Code</li>
          <li>Live Demo</li>
        </ul>
      </div>
    </div>
  );
}
