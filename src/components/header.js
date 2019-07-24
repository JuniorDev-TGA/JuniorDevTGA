//import { Link } from "gatsby"
import React from "react"
import Image_JuniorDevLogo from "../images/juniordev_logo.png"

const Header = () => (
  <div class="header">
    <div class="header-logo">
      <img class="header-logo-image" src={Image_JuniorDevLogo} alt="logo"/>
      <span class="header-logo-top">JuniorDev</span>
      <span class="header-logo-bottom text-red">Tauranga</span>
    </div>
    <div class="header-navigation">
      <a href="#changeme">Next event</a> / <a href="#changeme">Meet the hosts</a> / <a href="#changeme">Slack channel</a> / <a href="#changeme">Newsletter</a>
    </div>
  </div>
)

export default Header
