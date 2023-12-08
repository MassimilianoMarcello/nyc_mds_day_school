import React from 'react'
import "./FourSection.css"

const FourSection = () => {
  return (<section className="parallax-b">
  <ul className="para-container-b">
    <li className="b1">
      <img src="/assets/hero_image3.png" alt="teacher and boy reading" />
    </li>
    <li className="b2">
    <h1 className='title3-tex'>
        <span>Lower School</span> builds a solid foundation for life
      </h1>
    </li>
    <li className="b3">
    <p className='b3'>
        Students explore their studies through unique, interdisciplinary
        hands-on experiences and state-of-the-art technology and begin to
        develop core academic skills.
      </p>
    </li>
    <li className="b4">
      
      <a href="./">learn more</a>
    </li>
    <li className="b5">
      
      <span className="rectangle1"></span>
    </li>
  </ul>
</section>

  
  )
}

export default FourSection