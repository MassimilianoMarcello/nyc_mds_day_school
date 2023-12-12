import React from "react";
import "./FourSection.css";

const FourSection = () => {
  return (
    <>
      <section className="parallax-b">
        <ul className="para-container-b">
          <li className="b-image-container">
            <img
              src="/assets/hero_image3.png"
              alt="children smiling"
              className="b1"
            />

            <h1 className="b5 ">
              <span className="rectangle1"></span>
            </h1>
          </li>

          <li className="b-text-container">
            <h1 className="b2 title3-tex">
              <span className="text-gold">Lower School </span> builds a solid
              foundation for life
            </h1>

            <p className="b3">
              Students explore their studies through unique, interdisciplinary
              hands-on experiences and state-of-the-art technology and begin to
              develop core academic skills.
            </p>

            <h1 className="b4">
              <a href="/sign-up">learn more </a>
            </h1>
          </li>
        </ul>
      </section>
    </>
  );
};

export default FourSection;
