import React from "react";
import "./MainContent.css";
import OneSection from "./OneSection";
import TwoSection from "./TwoSection";

import ThreeSection from "./ThreeSection";
import FourSection from "./FourSection";
import FiveSection from "./FiveSection";
import SixSection from "./SixSection";

const Two = () => {
  return (
    <>
      <section>
        <TwoSection />
        <OneSection />
        <ThreeSection />
        <FourSection />
        <FiveSection />
        <SixSection />
      </section>
    </>
  );
};

export default Two;
