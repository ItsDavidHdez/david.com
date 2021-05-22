import React from "react";
import merchImg from "../assets/images/merch.png";
import bookApp from "../assets/images/book-app.png";
import tpMexicanaImg from "../assets/images/tp-mexicana.png";
import cientificoImg from "../assets/images/100tifico.png";
import profesionalBlogImg from "../assets/images/profesional-blog.png";
import "../styles/Work.css";

const Work = () => {
  return (
    <section className="work">
      <div className="work-container" id="work-container">
        <div className="work--body">
          <div className="work--body__img">
            <img src={merchImg} alt="Merch" />
          </div>
          <div className="work--body__info">
            <h1>Merch</h1>
            <div className="work--body-info-button">
              <a href="https://github.com/ItsDavidHdez/merch-store">
                SEE THE PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="work-container">
        <div className="work--body">
          <div className="work--body__info">
            <h1>TP Mexicana</h1>
            <div className="work--body-info-button">
              <a href="https://github.com/ItsDavidHdez/tp-mexicana">
                SEE THE PROJECT
              </a>
            </div>
          </div>
          <div className="work--body__img">
            <img src={tpMexicanaImg} alt="TP Mexicana" />
          </div>
        </div>
      </div>
      <div className="work-container" id="work-container">
        <div className="work--body">
          <div className="work--body__img">
            <img src={bookApp} alt="Merch" />
          </div>
          <div className="work--body__info">
            <h1>Book App</h1>
            <div className="work--body-info-button">
              <a href="https://my-book-app-by-david.herokuapp.com/">
                SEE THE PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="work-container">
        <div className="work--body">
          <div className="work--body__info">
            <h1>100tifi.co</h1>
            <div className="work--body-info-button">
              <a href="https://github.com/ItsDavidHdez/100tifi.co">
                SEE THE PROJECT
              </a>
            </div>
          </div>
          <div className="work--body__img">
            <img src={cientificoImg} alt="Cientifico" />
          </div>
        </div>
      </div>
      <div className="work-container" id="work-container">
        <div className="work--body">
          <div className="work--body__img">
            <img
              src="./assets/images/profesional-blog.png"
              alt="Profesional Blog"
            />
          </div>
          <div className="work--body__info">
            <h1>Profesional Blog</h1>
            <div className="work--body-info-button">
              <a href={profesionalBlogImg}>SEE THE PROJECT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
