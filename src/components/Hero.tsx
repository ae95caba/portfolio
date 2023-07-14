import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="sub-container">
          <h1>Full Stack Dev</h1>
          <p>
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
        <img className="avatar" src="https://i.pravatar.cc/300" />
      </div>
      <Skills />
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
