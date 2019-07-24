import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// COMPONENTS
import Header from "./header"

// IMAGES
import Image_JuniorDevLogo from "../images/juniordev_logo.png"

// STYLESHEETS
import "../styles/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}>
        <div className="c-header__logo">
          <img src={Image_JuniorDevLogo} alt="Junior Dev Tauranga Logo" />
        </div>
        <div className="c-header__navigation u-text-right">
          <a href="#changeme">Next event</a>
          <span>/</span>
          <a href="#changeme">Meet the hosts</a>
          <span>/</span>
          <a href="#changeme">Slack channel</a>
          <span>/</span>
          <a href="#changeme">Newsletter</a>
        </div>
      </Header>

      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
