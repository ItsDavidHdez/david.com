const routes = [
  {
    path: "/",
    template: `<main class="main">
    <div class="container">
      <div class="main--info">
        <h1 class="main-principal-title">Hello world! I'm David.</h1>
        <h2 class="main--secondary-title">Passionate Developer</h2>
        <p class="main--par">
          Hello! I am Mexican, i have 21 years old and actually I study
          Software Engineering totally passionate about technology. I love
          software development with a strong love for frontend architecture
        </p>
        <p class="main--par">Find more about me here</p>
        <div>
          <a id="contact" class="main--button">CONTACT ME</a>
          <a id="cv" class="main--button">DOWNLOAD CV</a>
        </div>
      </div>
      <div class="main--image">
        <img
          class="main--image__img"
          src="assets/images/david.jpg"
          alt="David Vargas Hernandez"
        />
      </div>
    </div>
  </main>`,
  },
  {
    path: "/work",
    template: "<h1>Work</h1>",
  },
  {
    path: "/aboutme",
    template: "<h1>About me</h1>",
  },
  {
    path: "/skills",
    template: "<h1>Skills</h1>",
  },
  {
    path: "/contact",
    template: "<h1>Contact</h1>",
  },
];

export default routes;
