import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

const NewsletterForm = () => {
  const [emailAddress, setEmailAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(emailAddress)
    console.log(result)
    return
  }
  
  return (
  <form className="c-newsletter__form" onSubmit={handleSubmit}>
      <input type="email" value={emailAddress.value} className="c-newsletter__form-email c-input" placeholder="Enter your email address..." onChange={e => setEmailAddress(e.target.value)}></input>
      <input type="submit" className="c-newsletter__form-submit c-button" value="Subscribe"></input>
  </form>
  )
} 
export default NewsletterForm