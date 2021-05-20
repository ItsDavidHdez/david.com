import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container-menu">
        <nav className="nav">
          <ul className="nav--ul" id="menu">
            <li className="nav--li">
              <Link to="/" className="nav--items--links" id="home-option">
                <span className="nav--items__span">Home</span>
              </Link>
            </li>
            <li className="nav--li">
              <Link to="/work" className="nav--items--links" id="work-option">
                <span className="nav--items__span">Work</span>
              </Link>
            </li>
            <li className="nav--li">
              <Link
                to="/aboutme"
                className="nav--items--links"
                id="aboutme-option"
              >
                <span className="nav--items__span">About me</span>
              </Link>
            </li>
            <li className="nav--li">
              <Link
                to="/skills"
                className="nav--items--links"
                id="skills-option"
              >
                <span className="nav--items__span">Skills</span>
              </Link>
            </li>
            <li className="nav--li">
              <Link
                to="/contact"
                className="nav--items--links"
                id="contact-option"
              >
                <span className="nav--items__span">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
