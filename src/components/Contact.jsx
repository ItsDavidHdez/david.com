import React, { useState, useRef } from "react";
import { toEmail, handleSubmitEmail } from "../utils/";
import "../styles/Contact.css";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const buttonMailTo = useRef(null);

  const handleChangeTetx = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return (
    <section className="contact">
      <div className="contact--form">
        <form id="form" action="/send-email" method="POST">
          <div className="contact--form-container">
            <label htmlFor="name" className="contact--form__label">
              What is your name <span id="required">*</span>
            </label>
          </div>
          <input
            name="name"
            required
            type="text"
            className="contact--form__input"
            placeholder="Name"
            onChange={(value) => handleChangeTetx("name", value.target.value)}
          />
          <div className="contact--form-container">
            <label htmlFor="email" className="contact--form__label">
              What is your email <span id="required">*</span>
            </label>
          </div>
          <input
            name="email"
            required
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="contact--form__input"
            placeholder="Email"
            onChange={(value) => handleChangeTetx("email", value.target.value)}
          />
          <div className="contact--form-container">
            <label htmlFor="message" className="contact--form__label">
              Type your message <span id="required">*</span>
            </label>
          </div>
          <textarea
            name="message"
            required
            type="text"
            className="contact--form__input"
            placeholder="Message"
            id="textarea"
            cols="30"
            rows="10"
            onChange={(value) =>
              handleChangeTetx("message", value.target.value)
            }
          ></textarea>
          <div>
            <button
              id="sendMessage"
              className="main--button"
              onClick={(e) => handleSubmitEmail(e, buttonMailTo)}
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
        <a
          ref={buttonMailTo}
          style={{ opacity: 0 }}
          href={toEmail(state.name, state.email, state.message)}
          id="mailto"
        >
          mail
        </a>
      </div>
    </section>
  );
};

export default Contact;
