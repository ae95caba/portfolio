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
          <p>Social</p>
        </div>
        <img className="avatar" src="https://i.pravatar.cc/300" />
      </div>
      <Skills />
    </section>
  );
}

function Skills() {
  return <section id="skills">skills</section>;
}
