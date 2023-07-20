import React from "react";

export default function Header() {
  return (
    <header>
      <div className="logo">ANdre</div>
      <Navbar />
    </header>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li>Hero</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <button className="burger-menu">3</button>
    </nav>
  );
}
