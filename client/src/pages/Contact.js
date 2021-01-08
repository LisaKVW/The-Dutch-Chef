import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Contact = (props) => {
  return (
    <div>
      <h2> Got a question, tip, suggestion?</h2>
      <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
    </div>
  )
}

export default Contact