import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Contact = (props) => {
  return (
    <div>
      <div className="grid-wrap" style={{ display: "grid", gridTemplateColumns: "50% 50%", width: "80%", marginTop: "5.3vh", margin: "0 auto" }}>
        <section >
          <img src="https://i.imgur.com/QyBIGFl.jpg" style={{ width: "70%", marginTop: "22px", borderRadius: "6px" }} />
        </section>
        <section className="contact-email">
          <h4> The Dutch Chef would love to hear your feedback!</h4>
          <p> Please email me with any questions, suggestions or comments to:
        <span style={{ fontSize: "21px" }}> DutchChefContact@gmail.com </span>
          </p>
          <h5>Subscribe</h5>
          <p> Like to stay up-to-date, and know when there are new recipes, stories and news? </p>
          <p> Sign up with your email below:</p>
          <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        </section>
      </div>
    </div>
  )
}

export default Contact

