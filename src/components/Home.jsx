import React from "react";
import { Link } from "react-router-dom";
import { davidProfileImg } from "../utils";
import "../styles/Home.css";

const Home = () => {
  return (
    <main className="main">
      <div className="container" id="container">
        <div className="main--info">
          <h1 className="main-principal-title">Hello world! I'm David.</h1>
          <h2 className="main--secondary-title" id="main">
            Passionate Developer
          </h2>
          <p className="main--par" id="main--par">
            Hello! I'm Mexican, i have 21 years old and actually I study
            Software Engineering totally passionate about technology. I love
            software development with a strong love for frontend architecture
          </p>
          <p className="main--par" id="main--par">
            Find more about me{" "}
            <Link className="main--par__aboutme" to="/aboutme">
              here
            </Link>
          </p>
          <div className="main--button-container" id="main--button-container">
            <Link id="contact" className="main--button" to="/contact">
              CONTACT ME
            </Link>
            <button id="cv" className="main--button">
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className="main--image">
          <img
            id="main--image"
            className="main--image__img"
            src={davidProfileImg}
            alt="David Vargas Hernandez"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
