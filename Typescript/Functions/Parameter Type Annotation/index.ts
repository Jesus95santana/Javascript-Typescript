/**
 *
 * In TypeScript, function parameters may be given
 * type annotations with the same syntax as variable declarations:
 * a colon next to the name.
 */

function triple(value: number) {
	return value * 3;
}

function greetTripled(greeting: string, value: number) {
	console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled("Hiya", 5);
