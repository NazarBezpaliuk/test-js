const guy = document.querySelector("#guy");
const box = document.querySelector("#dt");
const circle = document.querySelector("#dd");
const circl = document.querySelector("#circl");
const boxB = document.querySelector("#box");
const start = document.querySelector("#start");

const pppp = 20;

let left = 0;
let right = 0;
let leftC = 0;
let rightC = 0;
let rotateR = 0;

let chek;

const startGame = () => {
  start.style.transform = "translate(-50%, -50%) scale(0)";
  boxB.classList.add("box-game_start");
};

const circleChek = () => {
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
    guy.style.animation = "none";
    boxB.classList.remove("border-animate");
    boxB.classList.remove("box-game_start");
    start.style.transform = "translate(-50%, -50%)";
    return;
  } else if (chek === 2) {
    if (event.code === "ArrowRight") {
      if (left >= 506) {
        left = 532;
        guy.style.transform = `translate(${left}px, ${right}px)`;
        return;
      }
      left += pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    } else if (event.code === "ArrowLeft") {
      if (left <= 0) {
        left = -9.5;
        guy.style.transform = `translate(${left}px, ${right}px)`;
        return;
      }
      left -= pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    } else if (event.code === "ArrowUp") {
      if (right <= -196) {
        right = -202;
        guy.style.transform = `translate(${left}px, ${right}px)`;
        return;
      }
      right -= pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    } else if (event.code === "ArrowDown") {
      if (right >= -20) {
        right = 0;
        guy.style.transform = `translate(${left}px, ${right}px)`;
        return;
      }
      right += pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    }
  } else if (chek === 1) {
    if (event.code === "ArrowRight") {
      if (leftC >= 486) {
        leftC = 492;
        circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
        return;
      }
      leftC += pppp;
      rotateR += 20;
      circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
    } else if (event.code === "ArrowLeft") {
      if (leftC <= 0) {
        leftC = -9;
        circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
        return;
      }
      leftC -= pppp;
      rotateR -= 20;
      circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
    } else if (event.code === "ArrowUp") {
      if (rightC <= 20) {
        rightC = 0;
        circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
        return;
      }
      rightC -= pppp;
      rotateR -= 20;
      circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
    } else if (event.code === "ArrowDown") {
      if (rightC >= 190) {
        rightC = 202;
        circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
        return;
      }
      rightC += pppp;
      rotateR += 20;
      circl.style.transform = `translate(${leftC}px, ${rightC}px) rotate(${rotateR}deg)`;
    }
  }
};

circle.addEventListener("click", circleChek);
box.addEventListener("click", boxChek);
window.addEventListener("keydown", jump);
start.addEventListener("click", startGame);
