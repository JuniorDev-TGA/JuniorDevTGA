import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

// COMPONENTS
import Header from "./header"
import Footer from "./footer"
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
          <HeaderLinks isHomepage={isHomepage} />
        </div>
        <div className="c-header__stemfest">
          <Link to="/stemfest2019">
            <div className="c-button">Stem Fest 2019</div>
          </Link>
        </div>
      </Header>

      {children}

      <Footer>
        <div className="c-footer__logo u-text-center">
          <Link to="/"><Logo /></Link>
        </div>
      </Footer>
    </>
  )
}

const HeaderLinks = (props) => {
  const { isHomepage } = props;

  if(isHomepage) {
    return (
      <>
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
      </>
    )
  }

  return (
    <>
      <Link to="/"><div className="c-header__page">Meet the hosts</div></Link>
      <span>/</span>
      <Link to="/"><div className="c-header__page">Slack channel</div></Link>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
