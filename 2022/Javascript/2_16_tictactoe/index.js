//DOM variables
const reset = document.getElementById('reset');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const main = document.getElementById('container');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');


// Javascript variables
const boxList = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];
const randomNum = Math.floor(Math.random()*9);
let inside = document.getElementById(boxList[randomNum]);
let winDisplay = win;
let loseDisplay = lose;
let attempts = 1;
let finished = false;


// Functions
const xMark = function() {
  if (event.target.innerHTML == '' && finished == false) {
    console.log(`Xmark`);
    event.target.innerHTML = 'x';
    if (box1.innerHTML == 'x' && box4.innerHTML == 'x' && box7.innerHTML == 'x' || box2.innerHTML == 'x' && box5.innerHTML == 'x' && box8.innerHTML == 'x' || box3.innerHTML == 'x' && box6.innerHTML == 'x' && box9.innerHTML == 'x' || box1.innerHTML == 'x' && box5.innerHTML == 'x' && box9.innerHTML == 'x' || box3.innerHTML == 'x' && box5.innerHTML == 'x' && box7.innerHTML == 'x' || box1.innerHTML == 'x' && box2.innerHTML == 'x' && box3.innerHTML == 'x' || box4.innerHTML == 'x' && box5.innerHTML == 'x' && box6.innerHTML == 'x' || box7.innerHTML == 'x' && box8.innerHTML == 'x' && box9.innerHTML == 'x') {
      console.log('you win!');
      winDisplay.style.display = 'flex';
      finished = true;
    } else {
      setTimeout(() => {
          while (attempts <= 50) {
            if (inside.innerHTML == '') {
              console.log(inside.id);
              inside.innerHTML = 'o';
              console.log('success');
              if (box1.innerHTML == 'o' && box4.innerHTML == 'o' && box7.innerHTML == 'o' || box2.innerHTML == 'o' && box5.innerHTML == 'o' && box8.innerHTML == 'o' || box3.innerHTML == 'o' && box6.innerHTML == 'o' && box9.innerHTML == 'o' || box1.innerHTML == 'o' && box5.innerHTML == 'o' && box9.innerHTML == 'o' || box3.innerHTML == 'o' && box5.innerHTML == 'o' && box7.innerHTML == 'o' || box1.innerHTML == 'o' && box2.innerHTML == 'o' && box3.innerHTML == 'o' || box4.innerHTML == 'o' && box5.innerHTML == 'o' && box6.innerHTML == 'o' || box7.innerHTML == 'o' && box8.innerHTML == 'o' && box9.innerHTML == 'o') {
                console.log('you lose!');
                loseDisplay.style.display = 'flex';
                finished = true;
              }
              break;
            } else if (inside.innerHTML != '') {
              console.log(`ERROR ${inside.id}`);
              newNum = Math.floor(Math.random()*9);
              inside = document.getElementById(boxList[newNum]);
              console.log(`retried ${attempts} times`);
              attempts++;
            }
          }
      }, 500);
    }
  }
}

const reseter = function() {
  winDisplay.style.display = 'none';
  loseDisplay.style.display = 'none';
  finished = false;
  attempts = 1;
  box1.innerHTML = '';
  box2.innerHTML = '';
  box3.innerHTML = '';
  box4.innerHTML = '';
  box5.innerHTML = '';
  box6.innerHTML = '';
  box7.innerHTML = '';
  box8.innerHTML = '';
  box9.innerHTML = '';
}

// Events
main.addEventListener('click', () => { xMark(event) });
reset.addEventListener('click', reseter);
