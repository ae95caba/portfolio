import { useState, useEffect, useRef } from "react";

import "./App.scss";

import Header from "./components/Header";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [switchToVertical, setSwitchToVertical] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const heroContainerRef = useRef<HTMLDivElement>(null);

  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkDivSizes = () => {
      const rootDiv = document.getElementById("root");

      const mainContainer = mainContainerRef.current!;
      const heroContainer = heroContainerRef.current!;

      const mainContainerWidth = mainContainer.getBoundingClientRect().width;
      const rootDivWidth = rootDiv!.getBoundingClientRect().width;

      if (
        mainContainerWidth > rootDivWidth &&
        heroContainer.style.flexDirection !== "column"
      ) {
        setSwitchToVertical(true);
      } else if (
        rootDivWidth >= mainContainerWidth * 2 &&
        heroContainer.style.flexDirection !== "row"
      ) {
        console.log("first");
        setSwitchToVertical(false);
      }
    };

    checkDivSizes(); // Check sizes initially

    window.addEventListener("resize", checkDivSizes); // Add resize event listener

    return () => {
      window.removeEventListener("resize", checkDivSizes); // Clean up the event listener on component unmount
    };
  }, [heroContainerRef]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  //if on mobile device (res <=480px)

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

    const deviceWidth = width * initialScaleValue();
    if (deviceWidth <= 480 && initialScaleValue() !== 0.7) {
      console.log(`this is a phone with a res of ${deviceWidth}`);
      changeInitialScaleValue(0.7);
    } else if (deviceWidth > 480 && initialScaleValue() !== 1) {
      changeInitialScaleValue(1);
    }
  }, [width]);

  return (
    <>
      <Header />
      <Debugger switchToVertical={switchToVertical} />
      <div className="container" ref={mainContainerRef}>
        <Hero
          heroContainerRef={heroContainerRef}
          switchToVertical={switchToVertical}
        />
        <AboutMe />
        <Projects switchToVertical={switchToVertical} />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

function Debugger({ switchToVertical }: { switchToVertical: boolean }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [initialScaleValue, setInitialScaleValue] = useState(1);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [mainContainerWidth, setMainContainerWidth] = useState(0);
  const [rootWidth, setRootWith] = useState(0);

  useEffect(() => {}, []);

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
      <div>stw is : {switchToVertical ? "true" : "false"}</div>
    </div>
  );
}

export default App;
