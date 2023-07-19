import React from "react";
import { useState, useEffect, useRef } from "react";
import skills from "../assets/skills/skills.jsx";
export default function Hero({
  switchToVertical,
  heroContainerRef,
}: {
  switchToVertical: boolean;
  heroContainerRef: React.RefObject<HTMLDivElement>;
}) {
  console.log(skills);
  const [styles, setStyles] = useState({});

  useEffect(() => {
    if (switchToVertical) {
      setStyles({
        container: {
          flexDirection: "column",
          alignItems: "center",
        },
        links: {},
        p: { textAlign: "center" },
        subContainer: { alignItems: "center" },
      });
    } else {
      setStyles({ container: { flexDirection: "row" } });
    }
  }, [switchToVertical]);

  return (
    <section id="hero">
      <div className="background"></div>
      <div className="content">
        <div
          className="container"
          ref={heroContainerRef}
          style={styles.container}
        >
          <div className="sub-container" style={styles.subContainer}>
            <h1>Full Stack Dev</h1>
            <p style={styles.p}>
              AboutMe Lorem, ipsum dolor sit amet consectetur <br />
              adipisicing elit. elit. Repudiandae sequi quaerat <br />
              quod laudantium repellendus tenetur necessitatibus <br />
              adipisci modi = deserunt dignissimos!
            </p>
            <ul className="links">
              <li>Github</li>
              <li>Linkedin</li>
              <li>Resume</li>
            </ul>
          </div>
          <img
            className="avatar"
            src="https://i.pravatar.cc/300"
            width="300px"
            height="300px"
          />
        </div>
        <Skills switchToVertical={switchToVertical} />
      </div>
    </section>
  );
}

function Skills({ switchToVertical }: { switchToVertical: boolean }) {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    if (switchToVertical) {
      setStyles({ flexDirection: "column" });
    } else {
      setStyles({ flexDirection: "row" });
    }
  }, [switchToVertical]);

  return (
    <section id="skills" style={styles}>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            <img src={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
}
