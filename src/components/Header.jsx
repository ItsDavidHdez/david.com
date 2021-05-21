import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container-menu">
        <nav className="nav">
          <ul className="nav--ul" id="menu">
            <li className="nav--li">
              <NavLink
                exact
                to="/"
                className="nav--items--links"
                id="home-option"
                activeClassName="nav--links-active"
              >
                <span className="nav--items__span">Home</span>
              </NavLink>
            </li>
            <li className="nav--li">
              <NavLink
                exact
                to="/work"
                className="nav--items--links"
                id="work-option"
                activeClassName="nav--links-active"
              >
                <span className="nav--items__span">Work</span>
              </NavLink>
            </li>
            <li className="nav--li">
              <NavLink
                exact
                to="/aboutme"
                className="nav--items--links"
                id="aboutme-option"
                activeClassName="nav--links-active"
              >
                <span className="nav--items__span">About</span>
              </NavLink>
            </li>
            <li className="nav--li">
              <NavLink
                exact
                to="/skills"
                className="nav--items--links"
                id="skills-option"
                activeClassName="nav--links-active"
              >
                <span className="nav--items__span">Skills</span>
              </NavLink>
            </li>
            <li className="nav--li">
              <NavLink
                exact
                to="/contact"
                className="nav--items--links"
                id="contact-option"
                activeClassName="nav--links-active"
              >
                <span className="nav--items__span">Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
