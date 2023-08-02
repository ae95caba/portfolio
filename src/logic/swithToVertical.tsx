/* useEffect(() => {
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
        rootDivWidth > mainContainerWidth * 1.6 &&
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
  }, []); */
