import React from "react";

const Work = () => {
  return (
    <section className="work">
      <div className="work-container" id="work-container">
        <div className="work--body">
          <div className="work--body__img">
            <img src="./assets/images/merch.png" alt="proyect" />
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
            <h1>Tituto</h1>
            <div className="work--body-info-button">
              <a href="https://github.com/ItsDavidHdez/merch-store">
                SEE THE PROJECT
              </a>
            </div>
          </div>
          <div className="work--body__img">
            <img src="./assets/images/merch.png" alt="proyect" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
