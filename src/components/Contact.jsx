import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact--form">
        <form action="/send-email" method="POST">
          <div className="contact--form-container">
            <label className="contact--form__label">What is your name</label>
          </div>
          <input
            type="text"
            className="contact--form__input"
            name="name"
            placeholder="Name"
          />
          <div className="contact--form-container">
            <label className="contact--form__label">What is your email </label>
          </div>
          <input
            type="text"
            className="contact--form__input"
            name="email"
            placeholder="Email"
          />
          <div className="contact--form-container">
            <label className="contact--form__label">Type your message </label>
          </div>
          <textarea
            type="text"
            className="contact--form__input"
            placeholder="Message"
            name="message"
            id="textarea"
            cols="30"
            rows="10"
          ></textarea>
          <div>
            <button className="main--button">SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
