import React from "react";
import { useState } from "react";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header>
      <div className="logo">ANdre</div>
      <nav>
        <ul>
          <li>Hero</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <button onClick={() => setShowSidebar(true)} className="burger-menu">
          3
        </button>
      </nav>
      {showSidebar ? (
        <div
          className="sidebar-overlay"
          onClick={() => setShowSidebar(false)}
        ></div>
      ) : (
        ""
      )}
      {showSidebar ? <Sidebar /> : ""}
    </header>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>Hero</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
