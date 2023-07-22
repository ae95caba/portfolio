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
  const [mainCW, setmainCW] = useState(0);
  const [rootW, setRootW] = useState(0);
  const [logs, setLogs] = useState([""]);

  const heroContainerRef = useRef<HTMLDivElement>(null);

  const mainContainerRef = useRef<HTMLDivElement>(null);

  //add listener to window-resize to trigger state switch
  //root 514/maincw 416
  //rootw 514/ maincw 700

  useEffect(() => {
    setLogs((prev) => [...prev, `rootW:${rootW}`]);
  }, [rootW]);
  useEffect(() => {
    setLogs((prev) => [...prev, ` mainCW:${mainCW}`]);
  }, [mainCW]);

  useEffect(() => {
    const toogleSwitToVerticalIfNeeded = () => {
      const rootDiv = document.getElementById("root")!;
      const rootDivWidth = rootDiv.getBoundingClientRect().width;
      setRootW(rootDivWidth);

      const mainContainer = mainContainerRef.current!;
      const mainContainerWidth = mainContainer.getBoundingClientRect().width;

      setmainCW(mainContainerWidth);

      // Get the computed value of the custom property
      const computedStyle = getComputedStyle(rootDiv);
      const switchToVerticalValue = computedStyle.getPropertyValue(
        "--switch-to-vertical"
      );

      if (
        mainContainerWidth + 20 >= rootDivWidth &&
        switchToVerticalValue === "false"
      ) {
        rootDiv.style.setProperty("--switch-to-vertical", "true");
      } else if (
        rootDivWidth > mainContainerWidth * 2 &&
        switchToVerticalValue === "true"
      ) {
        rootDiv.style.setProperty("--switch-to-vertical", "false");
      }
      console.log(mainContainerWidth);
      setmainCW(mainContainerWidth);
    };

    toogleSwitToVerticalIfNeeded(); // Check sizes initially

    window.addEventListener("resize", toogleSwitToVerticalIfNeeded); // Add resize event listener

    return () => {
      window.removeEventListener("resize", toogleSwitToVerticalIfNeeded); // Clean up the event listener on component unmount
    };
  }, []);

  /*  useEffect(() => {
    const mainContainer = mainContainerRef.current!;
    const mainContainerWidth = mainContainer.getBoundingClientRect().width;
    alert(mainContainerWidth);
    setmainCW(mainContainerWidth);
    const toogleSwitToVerticalIfNeeded = () => {
      alert(`callback mainCW is :${mainContainerWidth}`);
      const rootDiv = document.getElementById("root")!;
      const rootDivWidth = rootDiv.getBoundingClientRect().width;
      setRootW(rootDivWidth);

      if (mainContainerWidth + 20 > rootDivWidth) {
        rootDiv.style.setProperty("--switch-to-vertical", "true");
      } else if (mainContainerWidth + 20 <= rootDivWidth) {
        rootDiv.style.setProperty("--switch-to-vertical", "false");
      }
    };

    toogleSwitToVerticalIfNeeded(); // Check sizes initially

    window.addEventListener("resize", toogleSwitToVerticalIfNeeded); // Add resize event listener

    return () => {
      window.removeEventListener("resize", toogleSwitToVerticalIfNeeded); // Clean up the event listener on component unmount
    };
  }, []); */

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

      <Debugger mainCW={mainCW} rootW={rootW} logs={logs} />
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

function Debugger({
  mainCW,
  rootW,
  logs,
}: {
  mainCW: number;
  rootW: number;
  logs: [];
}) {
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
      <div>main C W :{mainCW}</div>
      <div>root W:{rootW}</div>
      {logs.map((log) => (
        <div>${log}</div>
      ))}
    </div>
  );
}

export default App;
