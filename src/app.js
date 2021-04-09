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
