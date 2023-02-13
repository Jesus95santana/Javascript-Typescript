// Variables
const body = document.getElementById("body")!;
const button = document.getElementById("btn")!;
const hexColor: HTMLElement = document.getElementById("color")!;

let Hex: (number | string)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function hexGenerator(hexVal: typeof Hex) {
	let hexArray: string[] = [];
	for (let i = 0; i < 6; i++) {
		let fate = Math.floor(Math.random() * hexVal.length);
		hexArray.push(Hex[fate].toString());
	}
	let generatedHex: string = "#" + hexArray.join("");
	return generatedHex;
}

// function changeBodyColor() {}
function changeTextHex() {
	hexColor.innerHTML = hexGenerator(Hex);
}
function changeColorBody() {
	body.style.backgroundColor = hexGenerator(Hex);
}

button?.addEventListener("click", () => {
	changeColorBody();
	changeTextHex();
});
