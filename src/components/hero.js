//import { Link } from "gatsby"
import React from "react"

// IMAGES
import CirclesBottom from "../images/circles-bottom.jpg"
import CirclesLeft from "../images/circles-left.jpg"
import CirclesTop from "../images/circles-top.jpg"

const Hero = () => (
  <div className="c-hero">
    <div className="c-hero__container u-text-center">
      <h1>Junior Dev <span className="u-text-red">Tauranga</span></h1>
      <div className="c-hero__tagline">We are a community for everyone. Attend our frequent meetups to be introduced to the industry, expand your knowledge and connect with others.</div>
      <div className="c-hero__event">
        <div className="c-hero__event-detail"><span className="u-text-red">Next Event: </span>Developer Gym Session</div>
        <div className="c-hero__event-detail"><span className="u-text-red">Where: </span>Cucumber HQ (78 Wharf Street)</div>
        <div className="c-hero__event-detail"><span className="u-text-red">When: </span>7th August, 6pm - 8pm</div>
        <div className="c-hero__cta"><a className="c-button" href="https://www.meetup.com/JuniorDev-Tauranga/" target="_blank" rel="noopener noreferrer">Join Us</a></div>
      </div>
    </div>
    <img src={CirclesBottom} className=" c-hero__circles--bottom" alt="" />
    <img src={CirclesLeft} className=" c-hero__circles--left" alt="" />
    <img src={CirclesTop} className=" c-hero__circles--top" alt="" />
  </div>
)

export default Hero
