import React from 'react'
import "./FiveSection.css"

const FiveSection = () => {
  return (

  <section className="parallax-c">
  <ul className="para-container-c">
    <li className="c1">
    <img src="/assets/hero image4.png" alt="young scientist" />
    </li>
    <li className='c-text-container'>
    <li className="c2">
    <h1>
      <span className="gold-text">Middle School  </span> helps groving student fluorish
    </h1>
    </li>
    <li className="c3">
    <p>
      When entering Middle School, students dive deeper into academic
      subjects, critical thinking and questioning, and logical reasoning.
    </p>
    </li>
    <li className="c4">
      
      <a href="./">learn more</a>
    </li>
    </li>
    
    {/* <li className="c5">
      
      <span className="rectangle1"></span>
    </li> */}
  </ul>
</section>
  )
}

export default FiveSection