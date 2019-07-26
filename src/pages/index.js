import React from "react"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo";

import Hero from "../components/hero"
import Hosts from "../components/hosts"
import HeroTagLine from "../components/hero-tagline"
import HeroNextEvent from "../components/hero-next-event"
import HeroNextEventDetail from "../components/hero-next-event-detail"

import SlackChannel from "../components/slack-channel"
import Image_Slack from "../images/slack.jpg"

import Newsletter from "../components/newsletter"
import NewsletterHeading from "../components/newsletter-heading"
import NewsletterTagLine from "../components/newsletter-tagline.js"
import NewsletterForm from "../components/newsletter-form"

import Footer from "../components/footer"

// FUNCTIONS
import PageScroll from '../components/functions'

const IndexPage = () => (
  <Layout>
    <SEO title="JuniorDev Tauranga" />
    <Hero>
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
    </Hero>

    <Hosts />

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
            href="https://join.slack.com/t/juniordevtga/shared_invite/enQtNDc3NjExOTk0NzA4LWM2NDM0N2EwNTIxZTNkNjM5ZGQ0NzM5ZmJhMGRhZGYwYjVhOWM4Y2Y1MWNjOTNmYjA2MTVjNjIyNDBhNDc2ZjY"
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

    <Newsletter>
      <NewsletterHeading title="Subscribe to our newsletter" />
      <NewsletterTagLine content="We'll send you notifications for when our next events are and what you need to bring to get the most out of them. We'll also let you know about cool tech-related things happening around Tauranga." />
      <NewsletterForm />
    </Newsletter>

    <Footer>
      <div className="c-footer__logo">
        <Logo />
      </div>
      <div className="c-footer__navigation">
        <div className="c-header__page" onClick={() => PageScroll('.c-hosts')}>Meet the hosts</div>
        <span>/</span>
        <div className="c-header__page" onClick={() => PageScroll('.c-slack')}>Slack channel</div>
      </div>
    </Footer>
  </Layout>
)

export default IndexPage
