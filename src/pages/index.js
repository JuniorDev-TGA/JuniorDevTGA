import React from "react"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Hosts from "../components/hosts"
import Footer from "../components/footer"

// IMAGES
import JuniorDevLogo from "../images/juniordev-logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="JuniorDev Tauranga" />
    <Hero></Hero>

    <Hosts></Hosts>

    <Footer>
      <div className="c-footer__logo">
        <img src={JuniorDevLogo} alt="Junior Dev Tauranga Logo"/>
      </div>
      <div className="c-footer__navigation">
        <a href="#changeme">Next event</a>
        <span>/</span>
        <a href="#changeme">Meet the hosts</a>
        <span>/</span>
        <a href="#changeme">Slack channel</a>
        <span>/</span>
        <a href="#changeme">Newsletter</a>
      </div>
    </Footer>
  </Layout>
)

export default IndexPage
