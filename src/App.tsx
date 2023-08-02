import { useState, useEffect, useRef } from "react";

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

  //changes the initial scale value if nedded
  useEffect(() => {
    function handleInitialScaleValue() {
      function setInitialScaleValue(number: number) {
        const viewportMetaTag = document.querySelector(
          'meta[name="viewport"]'
        ) as HTMLMetaElement;
        const newContent = `width=device-width, initial-scale=${number}`;

        viewportMetaTag?.setAttribute("content", newContent);
      }

      const deviceHeight = window.screen.height;

      const deviceWidth = window.screen.width;
      const isPhone = deviceWidth <= 480 || deviceHeight <= 480;
      const isSmallPhone = deviceWidth <= 340 || deviceHeight <= 340;

      if (isSmallPhone) {
        setInitialScaleValue(0.7);
        //for tablets, on pc this has no effect
      } else if (isPhone) {
        setInitialScaleValue(0.8);
      } else {
        setInitialScaleValue(1);
      }
    }

    handleInitialScaleValue();
    window.addEventListener("resize", handleInitialScaleValue);
    return () => {
      window.removeEventListener("resize", handleInitialScaleValue); // Clean up the event listener on component unmount
    };
  }, []);

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
