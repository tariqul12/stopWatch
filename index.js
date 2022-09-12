const seconds = document.getElementById("seconds");
const milliSeconds = document.getElementById("milliseconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let sec = 0;
let millisec = 0;
var timeInterval;

const timer = () => {
  millisec++;
  if (millisec < 9) {
    milliSeconds.innerHTML = "0" + millisec;
  }
  if (millisec > 9) {
    milliSeconds.innerHTML = millisec;
  }
  if (millisec > 99) {
    sec++;
    seconds.innerHTML = "0" + sec;
    millisec = 0;
    milliSeconds.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    seconds.innerHTML = sec;
  }
};

// start
start.addEventListener("click", () => {
  timeInterval = setInterval(timer, 10);
});

stop.addEventListener("click", () => {
  clearInterval(timeInterval);
});
reset.addEventListener("click", () => {
  clearInterval(timeInterval);
  millisec = "00";
  sec = "00";
  seconds.innerHTML = sec;
  milliSeconds.innerHTML = millisec;
});
