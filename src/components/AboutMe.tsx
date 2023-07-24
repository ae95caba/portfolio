import React from "react";

export default function AboutMe() {
  const goals = [
    {
      title: "Responsive",
      description:
        "fasdj asd asdf af fkljlkasdf asd  asdf  asdf   oaisdjfklajasdf ",
    },
    {
      title: "Easy to mantain",
      description: "fasdj asd fkljl af asdkasdf asdf oaisdjfklajasdf",
    },
    {
      title: "Use cutting edge tech",
      description: "fasdj asdfkl jl asdf kasdf  asdf oaisdjfklajasdf",
    },
    {
      title: "Good looking",
      description: "fasdj asdfkl jl asdf kasdf  adfs oaisdj fkla jasdf",
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
            <div className="subcontainer">
              <Card goal={goal} index={index} />
            </div>
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

function Card({ goal, index }: { goal: Goal; index: number }) {
  return (
    <div className={`card card-${index % 2 === 0 ? "left" : "right"} `}>
      <div className="tittle">{goal.title}</div>
      <div className="description">{goal.description}</div>
    </div>
  );
}
