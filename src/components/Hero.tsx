import React from "react";
import { useState, useEffect, useRef } from "react";
export default function Hero({
  switchToVertical,
  heroContainerRef,
}: {
  switchToVertical: boolean;
  heroContainerRef: React.RefObject<HTMLDivElement>;
}) {
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
        <Skills />
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h3>skills</h3>
      <ul>
        <li>Git</li>
        <li>React</li>
        <li>TS</li>
        <li>MD</li>
        <li>SCSS</li>
        <li>Jest</li>
        <li>Express</li>
      </ul>
    </section>
  );
}
