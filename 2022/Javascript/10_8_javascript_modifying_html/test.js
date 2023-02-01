// create h1 title named "I am parent"
// remove current p
// add div
// ad p with text "I am child"

console.log(x);


// Values
const main = body.querySelector('main');
const h1main = document.createElement('h1');
const pmain = main.querySelector('p');
const adiv = document.createElement('div');
const newpmain = document.createElement('p');
// New
main.append(h1main);
main.append(adiv);
adiv.appendChild(newpmain);
// Removed
pmain.remove();
// HTML
h1main.innerHTML = "I am Parent";
newpmain.innerHTML = ">I am a new child";
// ID
pmain.id = "pmainid";
adiv.id = "maindiv";


// question: can the dom just access an id like document.body.(id here).innerHtml?

// Values
const footer = body.querySelector('footer');
const h1foot = document.createElement('h1');
const oldp = footer.querySelector('p');
const footdiv = document.createElement('div');
const newfp = document.createElement('p');
// New Added
footer.append(h1foot);
footer.append(footdiv);
footdiv.append(newfp);
//removed
oldp.remove();
// HTML
h1foot.innerHTML = "I AM DAD";
newfp.innerHTML = '>I AM CHILD';
// Id
header.id = 'part1';
main.setAttribute('id','part2');
footer.setAttribute('id','part3');






