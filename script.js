const guy = document.querySelector("#guy");
const box = document.querySelector("#dt");
const circle = document.querySelector("#dd");
const circl = document.querySelector("#circl");
const boxB = document.querySelector("#box");
const start = document.querySelector("#start");
const boxA = document.querySelector("#box-box");
const socer = document.querySelector("#socer");

let num = 00;

const pppp = 20;

let left = 0;
let right = 0;
let leftC = 0;
let rightC = 0;
let rotateR = 0;

let time = 12;

let rotateBigR = 0;

let chek;

const rotateBig = () => {
  if (event.code === "KeyE") {
    rotateBigR += 2;
    boxB.style.transform = `translate(-50%, -50%) scaleY(1) rotate(${rotateBigR}deg)`;
  } else if (event.code === "KeyQ") {
    rotateBigR -= 2;
    boxB.style.transform = `translate(-50%, -50%) scaleY(1) rotate(${rotateBigR}deg)`;
  }
};

const startGame = () => {
  start.style.transform = "translate(-50%, -50%) scale(0)";
  boxB.classList.add("box-game_start");
  boxB.style.transform = `translate(-50%, -50%) scaleY(1) rotate(${rotateBigR}deg)`;
};

const circleChek = () => {
  if (chek === 1) {
    chek = 0;
    circl.style.animation = "none";
    guy.style.animation = "none";
    boxB.classList.remove("border-animate");
    return;
  }
  chek = 1;
  circl.style.animation = "color 4s infinite";
  guy.style.animation = "none";
  boxB.classList.add("border-animate");
};
const boxChek = () => {
  chek = 2;
  guy.style.animation = "color 4s infinite";
  circl.style.animation = "none";
  boxB.classList.add("border-animate");
};

const jump = () => {
  if (event.code === "Escape") {
    chek = 0;
    circl.style.animation = "none";
    boxB.classList.remove("border-animate");
    boxB.classList.remove("box-game_start");
    start.style.transform = "translate(-50%, -50%)";
    boxB.style.transform = `translate(-50%, -50%) scaleY(0) rotate(${rotateBigR}deg)`;
    return;
  } else if (chek === 1) {
    if (event.code === "ArrowRight") {
      if (rightC < 0) {
        rotateR += 40;
        circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
        circl.style.transition = "transform 1s";
        return;
      }
      if (leftC >= 486) {
        leftC = 492;
        circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
        circl.style.transition = "transform 1s";
        return;
      }
      leftC += pppp;
      rotateR += 20;
      circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
      circl.style.transition = "transform 1s";
    } else if (event.code === "ArrowLeft") {
      if (rightC < 0) {
        rotateR -= 40;
        circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
        circl.style.transition = "transform 1s";
        return;
      }
      if (leftC <= 0) {
        leftC = -9;
        circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
        circl.style.transition = "transform 1s";
        return;
      }
      leftC -= pppp;
      rotateR -= 20;
      circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
      circl.style.transition = "transform 1s";
    }
  }
};

const jumpUp = () => {
  if (event.code === "Space") {
    rightC = -200;
    circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
    circl.style.transition = "transform 1s";
  }
};

const jumpDown = () => {
  if (event.code === "Space") {
    num += 1;
    socer.textContent = `0${num}`;
    if (num >= 10) {
      socer.textContent = `${num}`;
    }
    rightC = 0;
    circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
    circl.style.transition = "transform 1.5s";
  }
};

circle.addEventListener("click", circleChek);
box.addEventListener("click", boxChek);
window.addEventListener("keydown", jump);
start.addEventListener("click", startGame);
window.addEventListener("keydown", rotateBig);
window.addEventListener("keydown", jumpUp);
window.addEventListener("keyup", jumpDown);
