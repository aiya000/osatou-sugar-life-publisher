import About from "@/pages/about";
import React from "react";
import { ReactScreenshotTest } from "react-screenshot-test";

ReactScreenshotTest.create("About")
  .viewport("Desktop", {
    width: 1024,
    height: 768
  })
  .viewport("iPhone X", {
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    isLandscape: false
  })
  .shoot("about", <About />)
  .run();
