import React from "react"

// IMAGES
import Social from "../images/social.png"

const Newsletter = ({ children }) => (
  <div className="c-newsletter">
    <div className="c-newsletter__container u-text-center">
      {children}
    </div>
    
    <img src={Social} className=" c-newsletter-social" alt="" />
  </div>
)

export default Newsletter
