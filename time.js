const hours = document.querySelector("#hours");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

let secondTime = 00;
let minuteTime = 00;
let hoursTime = 00;

const timer = () => {
    hours.textContent = `${hoursTime}`;
    minute.textContent = `${minuteTime}`;
    second.textContent = `${secondTime}`;
    for (let i = 0; i <= 60; i += 1) {
        
    }
}