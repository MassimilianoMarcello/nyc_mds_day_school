import React from "react";
import "./ThreeSection.css";

const ThreeSection = () => {
  return (
    <>
      <section className="parallax9">
        <ul className="para-container">
          <li className="a1">
            <img src="/assets/hero_image2.jpg" alt="teacher and boy reading" />
          </li>
          <li className="a2">
            <h1 className="title3-tex">
              Early Childhood Education
              <span className="text-gold">
                
                 designed to nurture and engage young minds
              </span>
            </h1>
          </li>
          <li className="a3">
            <p className="a3">
              MDS creates a warm and welcoming place for our youngest learners
              -toddlers through kindergartners- to drive as they begin their
              educational journey.
            </p>
          </li>
          <li className="a4">
            
            <a href="./">learn more</a>
          </li>
          <li className="a5">
            
            <span className="rectangle1"></span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ThreeSection;
