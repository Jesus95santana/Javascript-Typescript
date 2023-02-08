/**
 * TypeScript can also infer the types of values returned by functions.
 * It does this by looking at the types of the values after a function’s
 * return statements
 */
function getRandomNumber() {
	return Math.random();
}

const myVar = getRandomNumber();
