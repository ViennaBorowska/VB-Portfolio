import React from "react";
import "./Contact.css";
import { useState } from "react";
import { validateEmail } from "../../utils/validateEmail";

function Contact() {
  const [formState, setFormState] = useState();

  const [errorAlert, setErrorAlert] = useState("");

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

  function handleSubmit(e) {
    e.preventDefault();
    setErrorAlert("Message Sent!");
    console.log(formState);
  }

  return (
    <section className="form-container">
      <section className="form-header">
        <h1>
          Get In Touch
          <a
            className="email-link"
            href="mailto:viennabdev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <h2>viennabdev@gmail.com</h2>
          </a>
        </h1>
      </section>
      <form
        className="contact-form"
        action="mailto:viennabdev@gmail.com"
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
        <button type="submit" className="contact-btn" onClick={handleSubmit}>
          SEND
        </button>
      </form>
    </section>
  );
}

export default Contact;
