import React from "react";
import "./Contact.css";
import { useState } from "react";
import { validateEmail } from "../../utils/validateEmail";

function Contact() {
  const [formState, setFormState] = useState();

  const [errorAlert, setErrorAlert] = useState("");

  // Form Validations
  function handleBlur(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      console.log(isValid);

      if (!isValid) {
        window.alert("Your email is invalid.");
      } else {
        setErrorAlert("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorAlert(`${e.target.name} is required`);
      } else {
        setErrorAlert("");
      }
    }

    if (!errorAlert) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // let contactFormFields = {};

  // document.addEventListener =
  //   ("DOMContentLoaded",
  //   function () {
  //     contactFormFields.name = document.getElementById("name");
  //     contactFormFields.email = document.getElementById("email");
  //     contactFormFields.message = document.getElementById("message");
  //   });
  // function sendEmail() {
  //   contactFormFields
  //     .send({
  //       SecureToken: "<your generated token>",
  //       To: "viennabdev@gmail.com",
  //       From: contactFormFields.email,
  //       Subject: `Message from ` + contactFormFields.name,
  //       Body: contactFormFields.message,
  //     })
  //     .then((message) => alert("mail sent successfully"));
  // }
  // sendEmail();

  function handleSubmit(e) {
    e.preventDefault();
    setErrorAlert("Message Sent!");
    console.log(formState);
  }

  return (
    <section className="form-container">
      <section className="form-header">
        <h1>
          Send me a message...
          {/* <a
            className="email-link"
            href="mailto:viennabdev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <h2>viennabdev@gmail.com</h2>
          </a> */}
        </h1>
      </section>
      <form
        className="contact-form"
        action="mailto:viennabdev@gmail.com"
        encType="text/plain"
        method="post"
      >
        <label name="name" className="input-title">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input-box"
          name="Name"
          placeholder="Your name.."
          onBlur={handleBlur}
        ></input>
        <label name="email" className="input-title">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="input-box"
          name="Email"
          placeholder="Your email.."
          onBlur={handleBlur}
        ></input>
        <label name="message" className="input-title">
          Message
        </label>
        <textarea
          type="text"
          id="message"
          className="input-message"
          name="Message"
          placeholder="Your message.."
          onBlur={handleBlur}
        ></textarea>
        {errorAlert && <p className="form-message">{errorAlert}</p>}
        <input
          type="submit"
          className="contact-btn"
          name="submit"
          value="SEND"
        ></input>
      </form>
    </section>
  );
}

export default Contact;
