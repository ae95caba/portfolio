import { useState, useEffect, useRef } from "react";

import "./App.scss";

import Header from "./components/Header";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeigth] = useState(window.innerHeight);

  const heroContainerRef = useRef<HTMLDivElement>(null);

  const mainContainerRef = useRef<HTMLDivElement>(null);

  //add listener to window-resize to trigger state switch
  useEffect(() => {
    const toogleSwitToVerticalIfNeeded = () => {
      const rootDiv = document.getElementById("root")!;
      const mainContainer = mainContainerRef.current!;

      const mainContainerWidth = mainContainer.getBoundingClientRect().width;
      const rootDivWidth = rootDiv.getBoundingClientRect().width;

      // Get the computed value of the custom property
      const computedStyle = getComputedStyle(rootDiv);
      const switchToVerticalValue = computedStyle.getPropertyValue(
        "--switch-to-vertical"
      );

      if (
        mainContainerWidth + 20 > rootDivWidth &&
        switchToVerticalValue === "false"
      ) {
        // setSwitchToVertical(true);
        rootDiv.style.setProperty("--switch-to-vertical", "true");
      } else if (
        rootDivWidth >= mainContainerWidth * 1.9 &&
        switchToVerticalValue === "true"
      ) {
        // setSwitchToVertical(false);
        rootDiv.style.setProperty("--switch-to-vertical", "false");
      }
    };

    toogleSwitToVerticalIfNeeded(); // Check sizes initially

    window.addEventListener("resize", toogleSwitToVerticalIfNeeded); // Add resize event listener

    return () => {
      window.removeEventListener("resize", toogleSwitToVerticalIfNeeded); // Clean up the event listener on component unmount
    };
  }, []);

  //add listener to window resize to set width
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  //add listener to window resize to set heigth
  useEffect(() => {
    window.addEventListener("resize", () => setHeigth(window.innerHeight));
  }, []);
  //changes the initial scale value if nedded
  useEffect(() => {
    function initialScaleValue() {
      const viewportMetaTag = document.querySelector(
        'meta[name="viewport"]'
      ) as HTMLMetaElement;
      const content = viewportMetaTag.content;
      const matchResult = content.match(/\d+(\.\d+)?/);
      const numericPart = matchResult !== null ? matchResult[0] : "";

      return +numericPart;
    }

    function changeInitialScaleValue(number: number) {
      const viewportMetaTag = document.querySelector(
        'meta[name="viewport"]'
      ) as HTMLMetaElement;
      const newContent = viewportMetaTag.content.replace(
        String(initialScaleValue()),
        String(number)
      );

      viewportMetaTag?.setAttribute("content", newContent);
    }

    const deviceHeigth = height * initialScaleValue();
    const deviceWidth = width * initialScaleValue();
    const isPhoneRes = deviceWidth <= 480 || deviceHeigth <= 480; //add height to check if is phone
    const isZoomedOut = initialScaleValue() !== 1;
    const zoomOut = () => changeInitialScaleValue(0.8);
    const revertZoom = () => changeInitialScaleValue(1);
    if (isPhoneRes && !isZoomedOut) {
      zoomOut();
    } else if (!isPhoneRes && isZoomedOut) {
      revertZoom();
    }
  }, [width]);

  return (
    <>
      <Header />

      <Debugger />
      <div className="container" ref={mainContainerRef}>
        <Hero heroContainerRef={heroContainerRef} />
        <AboutMe />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

function Debugger() {
  const [width, setWidth] = useState(window.innerWidth);
  const [initialScaleValue, setInitialScaleValue] = useState(1);
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    setDeviceWidth(width * getInitialScaleValue());
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  function getInitialScaleValue() {
    const viewportMetaTag = document.querySelector(
      'meta[name="viewport"]'
    ) as HTMLMetaElement;
    const content = viewportMetaTag.content;
    const matchResult = content.match(/\d+(\.\d+)?/);
    const numericPart = matchResult !== null ? matchResult[0] : "";

    return +numericPart;
  }
  useEffect(() => {
    setInitialScaleValue(getInitialScaleValue());
  }, [width]);

  return (
    <div id="debugger">
      <div> w is :{width}</div>
      <div>i s is : {initialScaleValue}</div>
      <div>d w is : {deviceWidth}</div>
    </div>
  );
}

export default App;
