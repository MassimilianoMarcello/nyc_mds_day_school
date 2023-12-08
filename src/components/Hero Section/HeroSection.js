import React from 'react'
import "./HeroSection.css"

const HeroSection = () => {
  return ( <>
    <section className='hero-section'>
      <h1 className='title-text'>
        the <br /> future <br /> is <br /> 
        <span> bright.</span>
      </h1>
      
    
      <picture>
          <source
            srcset="/assets/hero_image.jpg"
            type="image/jpg"
            media="all and (max-width:1201px)"
          />
         
          <source
            srcset="/assets/hero_Image_Small.png"
            type="image/jpg"
            media="all and (min-width:600px)"
          />
       
          {/* <img src="/assets/hero_image.jpg" alt="couple in field" /> */}
        </picture>
    </section>
    <link rel="preload" type="image/jpg" href="/assets/hero_Image_Small.png" />
    <link rel="prefetch" type="image/jpg" href="/assets/hero_image.jpg" />
    <link rel="prefetch" type="image/jpg" href="/assets/hero_image.jpg" />
    </>
  )
}

export default HeroSection


