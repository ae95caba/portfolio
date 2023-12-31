import React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/hambuger-menu.json";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const hambugerAnimationRef = useRef<LottieRefCurrentProps>(null);

  return (
    <header>
      <div className="logo">André Espinoza</div>

      <button onClick={() => setShowSidebar(true)} className="burger-menu">
        <Lottie
          lottieRef={hambugerAnimationRef}
          animationData={animationData}
          autoplay={false}
          loop={0}
          onClick={() => {
            hambugerAnimationRef.current?.playSegments([0, 50], true);
          }}
        />
      </button>
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
      {showSidebar && (
        <div
          className="sidebar-overlay"
          onClick={() => {
            hambugerAnimationRef.current?.playSegments([75, 150], false);
            setShowSidebar(false);
          }}
        ></div>
      )}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            className="sidebarcontainer"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Sidebar() {
  return (
    <nav className="sidebar">
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
  );
}
