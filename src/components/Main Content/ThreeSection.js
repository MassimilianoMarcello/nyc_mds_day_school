import React from "react";
import "./ThreeSection.css";

const ThreeSection = () => {
  return (
    <>
      <section className="parallax9">
        <ul className="para-container">
          <li className="a-image-container">
            <img
              src="/assets/hero_image2.jpg"
              alt="teacher and boy reading"
              className="a1"
            />

           <h1 className="a5 "><span className="rectangle1"></span></h1> 
          </li>

          <li className="a-text-container">
            <h1 className="a2 title3-tex">
              Early Childhood Education
              <span className="text-gold">
                designed to nurture and engage young minds
              </span>
            </h1>

            <p className="a3">
              MDS creates a warm and welcoming place for our youngest learners
              -toddlers through kindergartners- to drive as they begin their
              educational journey.
            </p>

           <h1 className="a4"><a href="./" >
              learn more  </a></h1> 
          
          </li>
        </ul>
      </section>
    </>
  );
};

export default ThreeSection;
