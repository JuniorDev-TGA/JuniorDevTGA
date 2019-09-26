//import { Link } from "gatsby"
import React from "react"

// IMAGES
import Kelly from "../images/kelly-williams.jpg"
import Josh from "../images/josh.jpg"
import Matias from "../images/matias.jpg"
import Michael from "../images/michael-forde.jpg"
import Hayden from "../images/hayden.jpg"
import DatacomLogo from "../images/datacom-logo.png"
import CucumberLogo from "../images/cucumber-logo.png"

const Hosts = () => (
  <div className="c-hosts">
    <div className="c-hosts__container u-text-center">
      <h1>Meet the hosts</h1>
      <div className="c-hosts__people">
        <div className="c-hosts__person">
          <span className="c-hosts__person-name">Kelly Williams</span>
          <img
            className="c-hosts__person-image"
            src={Kelly}
            alt="Kelly Williams"
          ></img>
          <img
            className="c-hosts__person-company"
            src={CucumberLogo}
            alt="Cucumber"
          ></img>
        </div>
        <div className="c-hosts__person">
          <span className="c-hosts__person-name">Michael Forde</span>
          <img
            className="c-hosts__person-image"
            src={Michael}
            alt="Michael Forde"
          ></img>
          <img
            className="c-hosts__person-company"
            src={DatacomLogo}
            alt="Datacom"
          ></img>
        </div>
        <div className="c-hosts__person">
          <span className="c-hosts__person-name">Josh Biddick</span>
          <img
            className="c-hosts__person-image"
            src={Josh}
            alt="Josh Biddick"
          ></img>
          <img
            className="c-hosts__person-company"
            src="https://ricado.co.nz/images/logos/ricado_logo.svg"
            alt="Ricado"
          ></img>
        </div>
        <div className="c-hosts__person">
          <span className="c-hosts__person-name">Matias Iacono</span>
          <img
            className="c-hosts__person-image"
            src={Matias}
            alt="Matias Iacono"
          ></img>
          <img
            className="c-hosts__person-company"
            src={CucumberLogo}
            alt="Cucumber"
          ></img>
        </div>
        <div className="c-hosts__person">
          <span className="c-hosts__person-name">Hayden Bruin</span>
          <img
            className="c-hosts__person-image"
            src={Hayden}
            alt="Hayden Bruin"
          ></img>
          <img
            className="c-hosts__person-company"
            src={CucumberLogo}
            alt="Cucumber"
          ></img>
        </div>
      </div>
    </div>
  </div>
)

export default Hosts
