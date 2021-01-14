import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Contact = (props) => {
  return (
    <div>
      {/* <div className="grid-wrap" style={{ display: "grid", gridTemplateColumns: "50% 50%", width: "80%", marginTop: "5.3vh", margin: "0 auto" }}> */}
      <h4> The Dutch Chef would love to hear your feedback!</h4>
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", width: "92%", marginTop: "6vh", margin: "0 auto", gridGap: "2%" }}>
        <section >
          <img src="https://i.imgur.com/QyBIGFl.jpg" style={{ width: "70%", marginTop: "22px", borderRadius: "6px" }} />
        </section>
        <section className="contact-email">
          <p> Please email me with any questions, suggestions or comments to:
        <span style={{ fontSize: "21px" }}> DutchChefContact@gmail.com </span>
          </p>
          <h5>Subscribe</h5>
          <p> Like to stay up-to-date, and know when there are new recipes, stories and news? </p>
          <p> Sign up with your email below:</p>
          <div className="newsletter-wrap" style={{marginBottom: "7%"}}>
          <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}  />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact

