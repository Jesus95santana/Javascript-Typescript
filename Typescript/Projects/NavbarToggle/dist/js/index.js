"use strict";
const rootNode = document.getRootNode();
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
function toggleNav() {
    let display = links.classList.contains("show-links");
    display ? links.classList.toggle("show-links") : links.classList.toggle("show-links");
}
navToggle.addEventListener("click", toggleNav);
console.log("end");
//# sourceMappingURL=index.js.map