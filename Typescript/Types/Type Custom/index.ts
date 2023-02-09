/**
 * We use enums when we’d like to enumerate all
 * the possible values that a variable could have.
 *
 * TypeScript processes these kinds of enum types using
 * numbers. Enum values are assigned a numerical value
 * according to their listed order. The first value is
 * assigned a number of 0, the second a number of 1, and onwards
 */

// Before Typescript:
let petOnSale = "chinchilla";
let ordersArray = [
	["rat", 2],
	["chinchilla", 1],
	["hamster", 2],
	["chinchilla", 50],
];

// After Typescript:
enum Pet {
	Hamster,
	Rat,
	Chinchilla,
	Tarantula,
}

let petOnSaleTS: Pet;
petOnSaleTS = Pet.Chinchilla;

// An Array of Tuples
let ordersArrayTS: [Pet, number][] = [
	[Pet.Rat, 2],
	[Pet.Chinchilla, 1],
	[Pet.Hamster, 2],
	[Pet.Chinchilla, 50],
];
// Error! NO Jerboa
// ordersArrayTS.push([Pet.Jerboa, 3]);
