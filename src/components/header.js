//import { Link } from "gatsby"
import React from "react"
import Image_JuniorDevLogo from "../images/juniordev_logo.png"

const Header = () => (
  <div className="c-header">
    <div className="c-header__logo">
      <img src={Image_JuniorDevLogo} alt="Junior Dev Tauranga Logo"/>
    </div>
    <div className="c-header__navigation u-text-right">
      <a href="#changeme">Next event</a>
      <span>/</span>
      <a href="#changeme">Meet the hosts</a>
      <span>/</span>
      <a href="#changeme">Slack channel</a>
      <span>/</span>
      <a href="#changeme">Newsletter</a>
    </div>
  </div>
)

export default Header
