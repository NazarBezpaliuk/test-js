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
  chek = 1;
};
const boxChek = () => {
  chek = 2;
};

const jump = () => {
  if (chek === 2) {
    if (event.code === "ArrowRight") {
      if (left >= 526) {
        left = 546;
        guy.style.transform = `translate(${left}px, ${right}px)`;
        return;
      }
      left += pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    } else if (event.code === "ArrowLeft") {
      if (left <= 0) {
        left = -20;
        guy.style.transform = `translate(${left}px, ${right}px)`;
        return;
      }
      left -= pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    } else if (event.code === "ArrowUp") {
      if (right <= -206) {
        right = -226;
        guy.style.transform = `translate(${left}px, ${right}px)`;
        return;
      }
      right -= pppp;
      guy.style.transform = `translate(${left}px, ${right}px)`;
    } else if (event.code === "ArrowDown") {
      if (right <= 0) {
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
        leftC = 506;
        circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
        return;
      }
      leftC += pppp;
      circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
    } else if (event.code === "ArrowLeft") {
      if (leftC <= 0) {
        leftC = -20;
        circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
        return;
      }
      leftC -= pppp;
      circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
    } else if (event.code === "ArrowUp") {
      if (rightC <= 20) {
        rightC = 0;
        circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
        return;
      }
      rightC -= pppp;
      circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
    } else if (event.code === "ArrowDown") {
      if (rightC >= 207) {
        rightC = 227;
        circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
        return;
      }
      rightC += pppp;
      circl.style.transform = `translate(${leftC}px, ${rightC}px)`;
    }
  }
};

circle.addEventListener("click", circleChek);
box.addEventListener("click", boxChek);
window.addEventListener("keydown", jump);
