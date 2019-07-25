import React from "react"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Footer from "../components/footer"

// IMAGES
import Image_JuniorDevLogo from "../images/juniordev_logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="JuniorDev Tauranga" />
    <Hero></Hero>

    <h1>Junior Dev Tauranga</h1>

    <Footer>
      <div className="c-footer__logo">
        <img src={Image_JuniorDevLogo} alt="Junior Dev Tauranga Logo"/>
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
