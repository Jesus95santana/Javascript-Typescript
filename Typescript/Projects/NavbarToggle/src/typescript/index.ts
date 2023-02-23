// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const rootNode = document.getRootNode() as HTMLElement;
const navToggle = document.querySelector(".nav-toggle") as HTMLElement;
const links = document.querySelector(".links") as HTMLElement;

// function toggleNav() {
// 	links.hidden ? (links.toggle = false) : (links.hidden = true);
// }
function toggleNav() {
	let display = links.classList.contains("show-links");
	display ? links.classList.toggle("show-links") : links.classList.toggle("show-links");
}

navToggle.addEventListener("click", toggleNav);
console.log("end");
