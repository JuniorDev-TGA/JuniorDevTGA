//import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <div class="header">
    <div class="header-logo">
      <img class="header-logo-image" src="images/juniordev_logo.png" alt="logo"/>
      <span class="header-logo-top">JuniorDev</span>
      <span class="header-logo-bottom text-red">Tauranga</span>
    </div>
    <div class="header-navigation">
      <a href="#changeme">Next event</a> / <a href="#changeme">Meet the hosts</a> /
      <a href="#changeme">Slack channel</a> / <a href="#changeme">Newsletter</a>
    </div>
  </div>
)

export default Header
