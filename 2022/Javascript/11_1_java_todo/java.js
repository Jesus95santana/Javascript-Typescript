//variables
let todo = [];
let task = document.getElementById('task');
let form = document.getElementById('form');
let clear = document.getElementById('clearbut');
let list = document.getElementById('list');
let li = list.querySelector('li');

//functions

function make() {
  event.preventDefault();

  // console.log(task.value);

  const li = document.createElement('li');
  const text = li.appendChild(document.createTextNode(task.value));
  form.reset();
  let listitems = list.querySelector('li');
  return list.appendChild(li);

}

function destroy() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

//events
form.addEventListener('submit', make);

clear.addEventListener('click', destroy);
