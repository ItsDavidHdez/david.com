import React from "react";
import {
  merchImg,
  bookApp,
  tpMexicanaImg,
  cientificoImg,
  profesionalBlogImg,
  tenteImg,
  blogImg,
} from "../utils";
import "../styles/Work.css";

const Work = () => {
  return (
    <section className="work">
      <div className="work-container" id="work-container">
        <div className="work--body__img">
          <img src={blogImg} alt="Merch" />
        </div>
        <div className="work--body__info">
          <h1>David's Blog</h1>
          <div className="work--body-info-button">
            <a href="https://github.com/ItsDavidHdez" target="_blank">
              SEE THE PROJECT
            </a>
          </div>
        </div>
      </div>
      <div className="work-container">
        <div className="work--body__info">
          <h1>Tenté</h1>
          <div className="work--body-info-button">
            <a href="https://nervous-shaw-228ef7.netlify.app/" target="_blank">
              SEE THE PROJECT
            </a>
          </div>
        </div>
        <div className="work--body__img">
          <img src={tenteImg} alt="Tenté" />
        </div>
      </div>
      <div className="work-container" id="work-container">
        <div className="work--body__img">
          <img src={merchImg} alt="Merch" />
        </div>
        <div className="work--body__info">
          <h1>Merch</h1>
          <div className="work--body-info-button">
            <a
              href="https://github.com/ItsDavidHdez/merch-store"
              target="_blank"
            >
              SEE THE PROJECT
            </a>
          </div>
        </div>
      </div>
      <div className="work-container">
        <div className="work--body__info">
          <h1>TP Mexicana</h1>
          <div className="work--body-info-button">
            <a
              href="https://github.com/ItsDavidHdez/tp-mexicana"
              target="_blank"
            >
              SEE THE PROJECT
            </a>
          </div>
        </div>
        <div className="work--body__img">
          <img src={tpMexicanaImg} alt="TP Mexicana" />
        </div>
      </div>
      <div className="work-container" id="work-container">
        <div className="work--body__img">
          <img src={bookApp} alt="Merch" />
        </div>
        <div className="work--body__info">
          <h1>Book App</h1>
          <div className="work--body-info-button">
            <a
              href="https://my-book-app-by-david.herokuapp.com/"
              target="_blank"
            >
              SEE THE PROJECT
            </a>
          </div>
        </div>
      </div>
      <div className="work-container">
        <div className="work--body__info">
          <h1>100tifi.co</h1>
          <div className="work--body-info-button">
            <a
              href="https://github.com/ItsDavidHdez/100tifi.co"
              target="_blank"
            >
              SEE THE PROJECT
            </a>
          </div>
        </div>
        <div className="work--body__img">
          <img src={cientificoImg} alt="Cientifico" />
        </div>
      </div>
      <div className="work-container" id="work-container">
        <div className="work--body__img">
          <img src={profesionalBlogImg} alt="Profesional Blog" />
        </div>
        <div className="work--body__info">
          <h1>Profesional Blog</h1>
          <div className="work--body-info-button">
            <a
              href="https://github.com/ItsDavidHdez/profesional-blog"
              target="_blank"
            >
              SEE THE PROJECT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
