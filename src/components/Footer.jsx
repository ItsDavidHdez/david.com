import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <a href="https://github.com/ItsDavidHdez">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/angeldavid.vargashernandez">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/ItsDavidHdez">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/david-hernandez-677183189/">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
