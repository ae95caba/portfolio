import React from "react";
import { useState, useEffect, useRef } from "react";
import skills from "../assets/skills/skills";
import links from "../assets/links/links";
import stroke from "../assets/strokes/stroke.svg";
import wavingHand from "../assets/waving-hand.png";

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
            <h1>MERN Dev</h1>
            <img className="stroke" src={stroke} />
            <p>
              Hi, I'm Andre Espinoza. <br />A Full Stack Dev.
              <br />
              Welcome to my site. <br />
              <span>
                <img src={wavingHand} alt="waving hand" />
              </span>
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
