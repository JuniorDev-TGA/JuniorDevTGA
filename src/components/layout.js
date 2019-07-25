import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// COMPONENTS
import Header from "./header"
import Logo from "../components/logo";

// FUNCTIONS
import PageScroll from './functions'

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
          <Logo />
        </div>
        <div className="c-header__navigation u-text-right">
          <div className="c-header__page" onClick={() => PageScroll('.c-hosts')}>Meet the hosts</div>
          <span>/</span>
          <div className="c-header__page" onClick={() => PageScroll('.c-slack')}>Slack channel</div>
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
