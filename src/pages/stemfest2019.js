import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// IMAGES
import MC2018 from "../images/mc_landing_2018.jpg"
import MC2017 from "../images/mc_landing_2017_square.jpg"
import MC2016 from "../images/mc_landing_2016_square.jpg"
import MC2015 from "../images/mc_landing_2015_square.png"

const StemFest = () => {
  const tutorials = [
    {
      title: "Minecraft Voyage Aquatic",
      description:
        "Use your creativity and problem solving skills to explore and build underwater worlds with code.",
      image: MC2018,
      url: "https://studio.code.org/s/aquatic/reset",
    },
    {
      title: "Minecraft Adventurer",
      description: "Use code to take Alex or Steve on an adventure.",
      image: MC2017,
      url: "https://studio.code.org/s/mc/reset",
    },
    {
      title: "Minecraft Designer",
      description:
        "Program animals and other Minecraft creatures in your own version of Minecraft.",
      image: MC2016,
      url: "https://studio.code.org/s/minecraft/reset",
    },
    {
      title: "Minecraft Hero's Journey",
      description: "Journey through Minecraft with code.",
      image: MC2015,
      url: "https://studio.code.org/s/hero/reset",
    },
  ]
  return (
    <Layout>
      <SEO title="Stem Fest 2019 - JuniorDev TGA" />

      <div className="c-learn">
        <h2 className="c-learn__heading">Learn to code with Minecraft</h2>
        <div className="c-learn__description">
          Use your creativity and problem solving skills to explore and build
          underwater worlds with code!
        </div>
        <div className="c-learn__tutorials">
          <div className="c-tutorial__list">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <Tutorial key={index} tutorial={tutorial} />
              ))}
          </div>
        </div>
      </div>

      <div className="c-hunt" style={{ display: "none" }}>
        <div className="c-hunt__container">
          <h2 className="c-hunt__heading">Join the Scavenger Hunt!</h2>
          <div className="c-hunt__description">
            Work together to find various markers around the stem fest event and
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Work together to find various markers around the stem fest event and
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="c-hunt__cta">
            <a href="https://hunt.jdtga.dev" class="c-button c-button--large">
              OPEN APP
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const Tutorial = props => {
  const { tutorial } = props
  return (
    <div className="c-tutorial__container">
      <div className="c-tutorial__item">
        <img src={tutorial.image} alt={tutorial.title} />
        <div className="c-tutorial__overlay">
          <div className="c-overlay__container">
            <div className="c-tutorial__title">{tutorial.title}</div>
            <div className="c-tutorial__description">
              {tutorial.description}
            </div>
            <div className="c-tutorial__start">
              <a
                href={tutorial.url}
                target="_blank"
                className="c-button"
                rel="noopener noreferrer"
              >
                Start Game
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StemFest
