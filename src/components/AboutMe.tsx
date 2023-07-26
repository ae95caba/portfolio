import React from "react";
import Reveal from "./Reveal";
import checkMark from "../assets/check-mark.svg";
import cornerStroke from "../assets/corner-stroke.png";
import bottomStroke from "../assets/bottom-stroke.png";

export default function AboutMe() {
  const goals = [
    {
      title: "Responsive",
      description:
        "The design should be responsive and visually appealing across a wide range of devices, from low-resolution phones to high-resolution monitors / TVs.",
    },
    {
      title: "Easy to maintain",
      description:
        "The code should be written with a focus on readability, clarity, and modularity to ensure ease of debugging, comprehension, and extensibility.",
    },
    {
      title: "Use cutting edge tech",
      description:
        "The projects should be made leveraging the latest advancements in technology to achieve a significant competitive advantage.",
    },
    {
      title: "Visually appealing",
      description:
        "The design should prioritize UX (User Experience) and strive for a polished UI (User Interface).",
    },
  ];
  return (
    <section id="about">
      <div className="background"></div>
      <div className="content">
        <h2>About me</h2>
        <h3>My goal is to make apps that are</h3>
        <div className="container">
          {goals.map((goal, index) => (
            <Reveal direction={index % 2 === 0 ? "left" : "right"}>
              <Card goal={goal} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Goal {
  title: string;
  description: string;
}

function Card({ goal }: { goal: Goal }) {
  return (
    <div className={`card`}>
      <img className="corner-stroke" src={cornerStroke} />
      <img className="checkmark" src={checkMark} alt="check mark" />
      <div>
        <h4 className="tittle">{goal.title}</h4>
      </div>
      <p className="description">{goal.description}</p>
      <img className="bottom-stroke" src={bottomStroke} />
    </div>
  );
}
