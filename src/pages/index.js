import React from "react"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo";

import Hero from "../components/hero"
import HeroTagLine from "../components/hero-tagline"
import HeroNextEvent from "../components/hero-next-event"
import HeroNextEventDetail from "../components/hero-next-event-detail"

import SlackChannel from "../components/slack-channel"
import Image_Slack from "../images/slack.jpg"

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

    <SlackChannel>
      <div className="c-slack__column-text">
        <div className="c-slack__title">We have a slack channel!</div>
        <div className="c-slack__description">
          <p>We have an awesome community of over 50 developers in Tauranga. Come and join our group and be apart of the fun.</p>
          <p>We can help with your job search or help with career advice, just ask a question and somebody from the community will help you out.</p>
        </div>
        <div className="c-slack__cta">
          <a
            className="c-button"
            href="https://www.meetup.com/JuniorDev-Tauranga/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Join the channel
          </a>
        </div>
      </div>
      <div className="c-slack__column-image">
        <img src={Image_Slack} alt="Junior Dev Tauranga Slack Community" />
      </div>
    </SlackChannel>

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
