import React from "react";
import "./FiveSection.css";

const FiveSection = () => {
  return (
    <>
      <section className="parallax-c">
        <ul className="para-container-c">
          <li className="c-image-container">
            <img src="/assets/hero image4.png" alt="young scientist" />

        
          </li>

          <li className="a-text-container">
            <h1 className="c2 title3-tex">
              Middle School
              <span className="text-gold">helps groving student fluorish</span>
            </h1>

            <p className="c3">
              When entering Middle School, students dive deeper into academic
              subjects, critical thinking and questioning, and logical
              reasoning.
            </p>

            <h1 className="c4">
              <a href="./">learn more </a>
            </h1>
          </li>
        </ul>
      </section>
    </>

  );
};

export default FiveSection;
