const guy = document.querySelector("#guy");
const box = document.querySelector("#dt");
const circle = document.querySelector("#dd");
const circl = document.querySelector("#circl");

const pppp = 20;

let left = 0;
let right = 0;
let leftC = 0;
let rightC = 0;

let chek;

const circleChek = () => {
  const audio = new Audio();
  audio.src = "sound.mp3";
  audio.autoplay = true;
  chek = 1;
};
const boxChek = () => {
  const audio = new Audio();
  audio.src = "sound.mp3";
  audio.autoplay = true;
  chek = 2;
};

const jump = () => {
  if (chek === 2) {
    const audio = new Audio();
    audio.src = "sound.mp3";
    audio.autoplay = true;
    if (event.code === "ArrowRight") {
      left += pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    } else if (event.code === "ArrowLeft") {
      left -= pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    } else if (event.code === "ArrowUp") {
      right -= pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    } else if (event.code === "ArrowDown") {
      right += pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    }
  } else if (chek === 1) {
    const audio = new Audio();
    audio.src = "sound.mp3";
    audio.autoplay = true;
    if (event.code === "ArrowRight") {
      leftC += pppp;
      circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
    } else if (event.code === "ArrowLeft") {
      leftC -= pppp;
      circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
    } else if (event.code === "ArrowUp") {
      rightC -= pppp;
      circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
    } else if (event.code === "ArrowDown") {
      rightC += pppp;
      circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
    }
  }
};

circle.addEventListener("click", circleChek);
box.addEventListener("click", boxChek);
window.addEventListener("keydown", jump);
