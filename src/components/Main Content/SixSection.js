import React from "react";
import "./SixSection..css";

const SixSection = () => {
  return (
    <section className="section6 parallax-d">
      <div className="para-container-d">
        <h1 className="title-d">Join our family</h1>

        <p className="text-d">
          The future is bright: feel the warmth. <br /> Join the MDS family today to
          experience the magic of MDS firsthand. <br /> 
        </p>
        <div className="ask-link-container">
          <p className="text-d">Have a question about application?</p>
          <a href="./" className="ask-link">Ask Here</a>
        </div>
        <a href="./" className="button-6">apply now</a>
      </div>
    </section>
  );
};

export default SixSection;
