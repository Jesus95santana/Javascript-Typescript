const display = document.getElementById('display');
const milisecondsDisplay = document.getElementById('miliseconds');
const startButton = document.getElementById('startButton');
const stopButton =  document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let milisec = 0;
let sec = 0;
let min = 0;
let ticking = false;

const start = function() {
  if (ticking == false) {
    ticking = true;
    timer();
  }
}

const stop = function() {
  if (ticking == true) {
    ticking = false;
  }
}

function timer() {
  if (ticking == true) {
    milisec = parseInt(milisec);
    sec = parseInt(sec);
    min = parseInt(min);
    milisec++

    if (milisec == 60) {
      sec = sec + 1;
      milisec = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }


    if (milisec < 10 || milisec == 0) {
      milisec = '0' + milisec;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    display.innerHTML = `${min}:${sec}:${milisec}`;
    setTimeout(timer, 10);
  }
}

function reset() {
  display.innerHTML = '00:00:00';
  milisec = 0;
  sec = 0;
  min = 0;
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
