import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header>
      <div className="logo">André Espinoza</div>
      <nav>
        <ul>
          <a href="#hero">
            <li>Hero</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
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
          <a href="#hero">
            <li>Hero</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
