//import { Link } from "gatsby"
import React from "react"
import JuniorDevLogo from "../images/juniordev-logo.png"

const Header = () => (
  <div className="c-header">
    <div className="c-header__logo">
      <img src={JuniorDevLogo} alt="Junior Dev Tauranga Logo"/>
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
