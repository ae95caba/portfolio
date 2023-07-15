import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);
  const [switchToVertical, setSwitchToVertical] = useState(false);
  useEffect(() => {
    const checkDivSizes = () => {
      const mainContainerDiv = document.getElementById("maincontainer");
      const rootDiv = document.getElementById("root");

      const mainContainerDivWidth =
        mainContainerDiv?.getBoundingClientRect()?.width;
      const rootDivWidth = rootDiv?.getBoundingClientRect()?.width;
      const container = document.querySelector(
        "#hero > .content > .container"
      ) as HTMLElement;
      if (
        mainContainerDivWidth > rootDivWidth &&
        container.style.flexDirection === "row"
      ) {
        setSwitchToVertical(true);
        console.log("same size");
      }

      if (rootDivWidth >= mainContainerDivWidth * 2) {
        setSwitchToVertical(false);
      }
    };

    checkDivSizes(); // Check sizes initially

    window.addEventListener("resize", checkDivSizes); // Add resize event listener

    return () => {
      window.removeEventListener("resize", checkDivSizes); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container" id="maincontainer">
        <Hero switchToVertical={switchToVertical} />
        <AboutMe />
        <Projects switchToVertical={switchToVertical} />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
