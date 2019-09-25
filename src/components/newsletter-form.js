import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Hearts } from "../icons"

const NewsletterForm = () => {
  const [emailAddress, setEmailAddress] = useState("")
  const [mailChimpResult, setMailChimpResult] = useState({})
  const [isPendingMailChimp, setIsPendingMailChimp] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsPendingMailChimp(true)
    const result = await addToMailchimp(emailAddress)
    setIsPendingMailChimp(false)
    setMailChimpResult(result)
  }

  if (mailChimpResult && mailChimpResult.result === "success") {
    return (
      <div className="c-newsletter__success">
        Thank You! You've been signed up to our newsletter, you'll be hearing
        from us soon!
      </div>
    )
  }

  return (
    <>
      {mailChimpResult &&
        mailChimpResult.result === "error" &&
        !isPendingMailChimp && (
          <div
            className="c-newsletter__error"
            dangerouslySetInnerHTML={{ __html: mailChimpResult.msg }}
          ></div>
        )}
      {isPendingMailChimp ? (
        <div className="c-newsletter__loading">
          <Hearts />
        </div>
      ) : (
        <form className="c-newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={emailAddress.value}
            className="c-newsletter__form-email c-input"
            placeholder="Enter your email address..."
            onChange={e => setEmailAddress(e.target.value)}
          ></input>
          <input
            type="submit"
            className="c-newsletter__form-submit c-button"
            value="Subscribe"
          ></input>
        </form>
      )}
    </>
  )
}
export default NewsletterForm
