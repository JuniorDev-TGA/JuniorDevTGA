import React from "react"

const NewsletterForm = () => (
  <form className="c-newsletter__form">
      <input type="email" className="c-newsletter__form-email c-input" placeholder="Enter your email address..."></input>
      <input type="submit" className="c-newsletter__form-submit c-button" value="Subscribe"></input>
  </form>
)
export default NewsletterForm