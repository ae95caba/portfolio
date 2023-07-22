import React from "react";
import { useState, useEffect, useRef } from "react";
import skills from "../assets/skills/skills.jsx";
import links from "../assets/links/links.jsx";

export default function Hero({
  heroContainerRef,
}: {
  heroContainerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section id="hero">
      <div className="background"></div>
      <div className="content">
        <div className="container" ref={heroContainerRef}>
          <div className="sub-container">
            <h1>Full Stack Dev</h1>
            <p>
              AboutMe Lorem, ipsum dolor sit amet consectetur <br />
              adipisicing elit. elit. Repudiandae sequi quaerat <br />
              quod laudantium repellendus tenetur necessitatibus <br />
              adipisci modi = deserunt dignissimos!
            </p>
            <ul className="links">
              {Object.keys(links).map((service, index) => (
                <li>
                  <a
                    href={links[service].link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={links[service].imgPath} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="avatar"> </div>
        </div>
        <Skills />
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="slider">
        <div className="caret"></div>
        <div className="box">Skills</div>
        <ul>
          {Object.keys(skills).map((skill, index) => (
            <li key={`${skill}-A`}>
              <img src={skills[skill]} alt={skill} />
              <div className="tooltip">{skill}</div>
            </li>
          ))}
        </ul>
        <ul>
          {Object.keys(skills).map((skill, index) => (
            <li key={`${skill}-B`}>
              <img src={skills[skill]} alt={skill} />
              <div className="tooltip">{skill}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
