/**
 * Unions allow us to define multiple allowed
 * type members by separating each type member with a
 * vertical line character |. With a union, we can re-type
 * the program from the previous exercise like this:
 */

let ID: string | number;

// number
ID = 1;

// or string
ID = "001";

console.log(`The ID is ${ID}.`);
