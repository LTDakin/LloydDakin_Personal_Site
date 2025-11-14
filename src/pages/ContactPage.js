import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import BackButton from "../components/BackButton";
import emailIcon from "../assets/images/email icon.png";

function ContactPage(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("sendButton").value = "Sent!";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page-div">
      <div className="page-header d-flex justify-content-between">
        <h1 style={{ fontFamily: "coolvetica", fontSize: "4em" }}>
          <img
            style={{
              display: "inline",
              height: "70px",
              marginRight: "20px",
              paddingBottom: "10px",
            }}
            src={emailIcon}
            alt="emailIcon"
          ></img>
          Let's connect
        </h1>
        <BackButton />
      </div>
      <form className="email-form" ref={form} onSubmit={sendEmail}>
        <div>
          <label className="form-label">Name</label>
          <input className="form-input" type="text" name="user_name" />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input className="form-input" type="email" name="user_email" />
        </div>
        <div>
          <label className="form-label">Message</label>
          <div>
            <textarea className="form-message" name="message" />
          </div>
        </div>
        <div>
          <input
            id="sendButton"
            className="form-submit-button"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
