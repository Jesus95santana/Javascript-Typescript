// event.listener(handler);

//both do same thing except you can add more to event listener

const butt = document.getElementById('clickButton');

butt.addEventListener('mousedown',
function down() {
  document.querySelector('body').style.backgroundColor = 'blue';
  console.log('mousedown blue');
}
);

butt.addEventListener('mouseup',
function up() {
  document.querySelector('body').style.backgroundColor = 'white';
  console.log('mouseup white');
}
);

// butt.onmousedown = function () {  document.querySelector('body').style.backgroundColor = 'blue';
// };
//
// butt.onmouseup = function () {
//   document.querySelector('body').style.backgroundColor = 'white';
// };
