const decreaseButton = document.getElementsByClassName("decrease")[0]!;
const resetButton = document.getElementsByClassName("reset")[0]!;
const increaseButton = document.getElementsByClassName("increase")[0]!;
const value = document.getElementById("value")!;

let counter = 0;
let textColor = "black";

function colorChange() {
	if (counter < 0) {
		textColor = "red";
	} else if (counter > 0) {
		textColor = "blue";
	} else {
		textColor = "black";
	}
}

function decrease() {
	counter -= 1;
	colorChange();
	value.style.color = textColor;
	value.innerHTML = counter.toString();
}
function increase() {
	counter += 1;
	colorChange();
	value.style.color = textColor;
	value.innerHTML = counter.toString();
}
function reset() {
	counter = 0;
	colorChange();
	value.style.color = textColor;
	value.innerHTML = counter.toString();
}

decreaseButton.addEventListener("click", decrease);
resetButton.addEventListener("click", reset);
increaseButton.addEventListener("click", increase);
