/* when we declare a variable with an initial value,
the variable can never be reassigned a value of a different data type.
This is an example of type inference: */
let aged = true;
let realAge = 0;

if (aged) {
	realAge = 4;
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);
