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
        <li>Header</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
