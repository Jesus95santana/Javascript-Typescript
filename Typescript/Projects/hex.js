// Variables
var body = document.getElementById("body");
var button = document.getElementById("btn");
var hexColor = document.getElementById("color");
var Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function hexGenerator(hexVal) {
    var hexArray = [];
    for (var i = 0; i < 6; i++) {
        var fate = Math.floor(Math.random() * hexVal.length);
        hexArray.push(Hex[fate].toString());
    }
    var generatedHex = "#" + hexArray.join("");
    return generatedHex;
}
// function changeBodyColor() {}
function changeTextHex() {
    hexColor.innerHTML = hexGenerator(Hex);
}
function changeColorBody() {
    body.style.backgroundColor = hexGenerator(Hex);
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    changeColorBody();
    changeTextHex();
});
