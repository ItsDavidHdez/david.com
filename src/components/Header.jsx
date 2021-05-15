import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container-menu">
        <nav className="nav">
          <ul className="nav--ul" id="menu">
            <li className="nav--li">
              <Link
                to="/"
                className="nav--items--links"
                id="home-option"
              ></Link>
            </li>
            <li className="nav--li">
              <Link
                to="/work"
                className="nav--items--links"
                id="work-option"
              ></Link>
            </li>
            <li className="nav--li">
              <Link
                to="/aboutme"
                className="nav--items--links"
                id="aboutme-option"
              ></Link>
            </li>
            <li className="nav--li">
              <Link
                to="/skills"
                className="nav--items--links"
                id="skills-option"
              ></Link>
            </li>
            <li className="nav--li">
              <Link
                to="/contact"
                className="nav--items--links"
                id="contact-option"
              ></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
