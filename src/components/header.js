import React from "react"

const Header = ({ children, isHomepage }) => (
  <div className={`c-header ${isHomepage ? "is-homepage" : ""}`}>
    {children}
  </div>
)

export default Header
