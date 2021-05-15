import "./styles/styles.css";

const cursor = document.querySelector("#cursor");
const anchor = document.querySelectorAll("a");

window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(2)";
    cursor.style.animationName = "borderAnim";
  });

  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
  });
});

// Initial animation

const container = document.getElementById("container");
const main = document.getElementById("main");
const cv = document.getElementById("cv");
const contact = document.getElementById("contact");
const mainImage = document.getElementById("main--image");
const mainPar = document.getElementById("main--par");
const buttons = document.getElementById("main--button-container");

setTimeout(() => {
  container.style.display = "flex";
  main.style.display = "flex";
  contact.style.display = "inline";
  cv.style.display = "inline";
  mainImage.style.display = "inline";
  mainPar.style.display = "flex";
  buttons.style.display = "block";
}, 3000);

/**
 * Englobar tiempos en una función
 * onclick a esa función de los botones de menú
 */
