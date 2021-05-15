import React from "react";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <div className="aboutme-container">
        <div className="aboutme-container-body">
          <div className="aboutme-head">
            <h1 className="aboutme--title" id="title">
              David Vargas Hernández
            </h1>
            <p className="aboutme--subtitle" id="subtitle">
              Web developer
            </p>
            <div className="main--image">
              <img
                className="aboutme--img"
                src="assets/images/david.jpg"
                alt="David Vargas Hernandez"
              />
            </div>
          </div>
          <div className="main--info">
            <p className="aboutme--info">
              I am a front-end developer in web technologies with basic back-end
              knowledge. Passionate and dedicated eager to work, learn new
              things, improve my skills and collaborate as a team.
            </p>
            <p className="aboutme--info">
              Personally, I identify as someone patient and friendly, who always
              seeks to do the work efficiently and organized. In addition to
              always concrete my work in the best way without ever severing to
              learn, giving a unique and own style to each project, trying to
              innovate and always maintain consistency in every aspect.
            </p>
            <p className="aboutme--info">
              I love creating innovative digital content based on my knowledge.
              In addition, I always try to have clear goals and achieve them,
              forever to remain in constant personal growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
