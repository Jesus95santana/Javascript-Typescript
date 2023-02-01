
// document gives access to DOM
// style gives acces to CSS
//document.style

// replaces
//document.body.innerHTML = "HELLO";

// identifies
//document.querySelector('p');
//document.getElementById('.chungus');

// edit
//document.createElement('');
//document.appendChild('');
//document.removeChild('');

//document.body.onclick;





const x = 'helloworld';

// shortcut for body
const body = document.body;
// shortcut for header using [querySelector]
const header = body.querySelector('header');
// creating new element h1 using [createElement]/ and renamed to (h1head)
const h1head = document.createElement('h1');
// added (h1head) to header
header.append(h1head);
// shortcut for p
const p = header.querySelector('p');
// replaced html in p
p.innerHTML = 'TRASH_CHILD';
// gave new id to p
p.id = 'pid';
// removed p
document.getElementById('pid').remove();
// made new div
const div = document.createElement('div');
// gave div an id
div.id = 'hole';
// added div into header
header.append(div);
// made new p
const newp = document.createElement('p');
// added new p into div
hole.appendChild(newp);
// placed html text in p
newp.innerHTML = '>I am new child';

// header section
h1head.innerHTML = "I AM A PARENT";











