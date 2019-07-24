import React from "react"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo";

import Hero from "../components/hero"
import HeroTagLine from "../components/hero-tagline"
import HeroNextEvent from "../components/hero-next-event"
import HeroNextEventDetail from "../components/hero-next-event-detail"

import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="JuniorDev Tauranga" />
    <Hero>
      <div className="c-hero__container u-text-center">
        <h1>Junior Dev <span className="u-text-red">Tauranga</span></h1>
        <HeroTagLine content="We are a community for everyone. Attend our frequent meetups to be introduced to the industry, expand your knowledge and connect with others." />
        <HeroNextEvent>
          <HeroNextEventDetail title="Next Event" description="Developer Gym Session" />
          <HeroNextEventDetail title="Where" description="Cucumber (78 Wharf Street)" />
          <HeroNextEventDetail title="When" description="7th August, 6pm - 8pm" />

          <div className="c-hero__cta">
            <a
              className="c-button"
              href="https://www.meetup.com/JuniorDev-Tauranga/"
              target="_blank"
              rel="noopener noreferrer"
              >
              Join Us
            </a>
          </div>
        </HeroNextEvent>
      </div>
    </Hero>

    <h1>Junior Dev Tauranga</h1>

    <Footer>
      <div className="c-footer__logo">
        <Logo />
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
