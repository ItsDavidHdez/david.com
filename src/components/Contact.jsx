import React, { useState, useRef } from "react";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mailTo = `mailto:davidvh46@gmail.com?subject=nombre ${state.name}  correo ${state.email}&body=${state.message}`;
  const buttonMailTo = useRef(null);

  const handleChangeTetx = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buttonMailTo.current.click();
  };

  return (
    <section className="contact">
      <div className="contact--form">
        <form id="form" action="/send-email" method="POST">
          <div className="contact--form-container">
            <label htmlFor="name" className="contact--form__label">
              What is your name*
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
              What is your email*
            </label>
          </div>
          <input
            name="email"
            required
            type="text"
            className="contact--form__input"
            placeholder="Email"
            onChange={(value) => handleChangeTetx("email", value.target.value)}
          />
          <div className="contact--form-container">
            <label htmlFor="message" className="contact--form__label">
              Type your message*
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
            <button className="main--button" onClick={(e) => handleSubmit(e)}>
              SEND MESSAGE
            </button>
          </div>
        </form>
        <a ref={buttonMailTo} style={{ opacity: 0 }} href={mailTo} id="mailto">
          mail
        </a>
      </div>
    </section>
  );
};

export default Contact;
