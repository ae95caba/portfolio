import { useState, useEffect, useRef } from "react";

import Header from "./components/Header";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
