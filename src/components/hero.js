import React from "react"

// IMAGES
import CirclesBottom from "../images/circles-bottom.jpg"
import CirclesLeft from "../images/circles-left.jpg"
import CirclesTop from "../images/circles-top.jpg"

const Hero = ({ children }) => (
  <div className="c-hero">
    {children}
    
    <img src={CirclesBottom} className=" c-hero__circles--bottom" alt="" />
    <img src={CirclesLeft} className=" c-hero__circles--left" alt="" />
    <img src={CirclesTop} className=" c-hero__circles--top" alt="" />
  </div>
)

export default Hero
