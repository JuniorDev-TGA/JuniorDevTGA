import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

// COMPONENTS
import Header from "./header"
import Logo from "../components/logo"

// FUNCTIONS
import PageScroll from "./functions"

// STYLESHEETS
import "../styles/main.scss"

const Layout = props => {
  const { children, isHomepage } = props
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
      <Header
        siteTitle={data.site.siteMetadata.title}
        isHomepage={isHomepage ? "is-homepage" : ""}
      >
        <div className="c-header__logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="c-header__navigation u-text-right">
          <div
            className="c-header__page"
            onClick={() => PageScroll(".c-hosts")}
          >
            Meet the hosts
          </div>
          <span>/</span>
          <div
            className="c-header__page"
            onClick={() => PageScroll(".c-slack")}
          >
            Slack channel
          </div>
        </div>
        <div className="c-header__stemfest">
          <Link to="/stemfest2019">
            <div className="c-button">Stem Fest</div>
          </Link>
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
