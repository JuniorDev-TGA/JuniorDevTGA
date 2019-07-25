import React from "react"

const HeroTagLine = ({ title, description }) => (
  <div className="c-hero__event-detail">
    <span className="u-text-red">{title}: </span>{description}
  </div>
)
export default HeroTagLine
