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
    <Hero>
      <div className="c-hero__container u-text-center">
        <h1>Junior Dev <span className="u-text-red">Tauranga</span></h1>
        <div className="c-hero__tagline">We are a community for juniors, students, people still learning and those already working, for self-learners, bootcampers, or grads and students in formal education.</div>
        <div className="c-hero__event">
          <div className="c-hero__event-detail"><span className="u-text-red">Next Event: </span>Developer Gym Session</div>
          <div className="c-hero__event-detail"><span className="u-text-red">Where: </span>Cucumber HQ (78 Wharf Street)</div>
          <div className="c-hero__event-detail"><span className="u-text-red">When: </span>7th August, 6pm - 8pm</div>
          <div className="c-hero__cta"><a className="c-button" href="https://www.meetup.com/JuniorDev-Tauranga/" target="_blank" rel="noopener noreferrer">Reserve your seat</a></div>
        </div>
      </div>
    </Hero>

    <h1>Junior Dev Tauranga</h1>

    <Footer>
      <div className="c-footer__logo">
        <img src={Image_JuniorDevLogo} alt="Junior Dev Tauranga Logo" />
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
