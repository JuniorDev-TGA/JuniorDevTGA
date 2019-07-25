//import { Link } from "gatsby"
import React from "react"

// IMAGES
import Pattern from "../images/hosts-pattern.jpg"
import Kelly from "../images/kelly-williams.jpg"
import Josh from "../images/josh.jpg"
import Matias from "../images/matias.jpg"
import Michael from "../images/michael.jpg"
import Hayden from "../images/hayden.jpg"
import DatacomLogo from "../images/datacom-logo.jpg"
import CucumberLogo from "../images/cucumber-logo.jpg"

const Hosts = () => (
  <div className="c-hosts">
    <div className="c-hosts__container u-text-center">
      <h1>Meet the hosts</h1>
      <div className="c-hosts__people">
        <div className="c-hosts__person">
          <img className="c-hosts__person-image" src={Josh}></img>
          <span className="c-hosts__person-name">Josh Biddick</span>
          <img className="c-hosts__person-company" src={CucumberLogo}></img>
        </div>
        <div className="c-hosts__person">
          <img className="c-hosts__person-image" src={Kelly}></img>
          <span className="c-hosts__person-name">Kelly Williams</span>
          <img className="c-hosts__person-company" src={CucumberLogo}></img>
        </div>
        <div className="c-hosts__person">
          <img className="c-hosts__person-image" src={Michael}></img>
          <span className="c-hosts__person-name">Michael Ford</span>
          <img className="c-hosts__person-company" src={DatacomLogo}></img>
        </div>
        <div className="c-hosts__person">
          <img className="c-hosts__person-image" src={Matias}></img>
          <span className="c-hosts__person-name">Matias Iacono</span>
          <img className="c-hosts__person-company" src={CucumberLogo}></img>
        </div>
        <div className="c-hosts__person">
          <img className="c-hosts__person-image" src={Hayden}></img>
          <span className="c-hosts__person-name">Hayden Bruin</span>
          <img className="c-hosts__person-company" src={CucumberLogo}></img>
        </div>
      </div>
    </div>
    <img src={Pattern} className="c-hosts__pattern" alt=""></img>
  </div>
)

export default Hosts
