const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const lapBtn = document.querySelector(".lap-btn");

let sec = 0;
let min = 0;
let ms = 0;
let laps = [];

const watchUi = document.querySelector(".watch");
const lapsUi = document.querySelector(".laps");
const reset = document.querySelector(".reset-btn");

reset.addEventListener("click", () => {
  sec = 0;
  min = 0;
  ms = 0;
  renderUi();
});

const renderUi = () => {
  watchUi.innerHTML = "";
  const secondsUi = document.createElement("p");
  secondsUi.innerText = `${min} Minutes ${sec} Seconds ${ms} MS`;
  watchUi.appendChild(secondsUi);
};
renderUi();

let minSec;
let msInterval;

startBtn.addEventListener("click", () => {
  minSec = setInterval(() => {
    if (sec < 60) {
      sec++;
    } else {
      sec = 0;
      ++min;
    }
  }, 1000);

  msInterval = setInterval(() => {
    renderUi();
    ms++;
    if (ms === 999) ms = 0;
  }, 1);
});

stopBtn.addEventListener("click", () => {
  clearInterval(minSec);
  clearInterval(msInterval);
});

lapBtn.addEventListener("click", () => {
  laps.push({ min: min, sec: sec, ms: ms });
  console.log(laps);
});

const callReject = () => {
  return { msg: "Rejected" };
};

const newArr = [1, 2, 3, 4, 5, 6, 7, 8].splice(5, 2, 3);
console.log(newArr);
