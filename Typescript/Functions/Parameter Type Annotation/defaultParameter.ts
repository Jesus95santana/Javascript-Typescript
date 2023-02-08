/**
 *  If a parameter is assigned a default value,
 *  TypeScript will infer the variable type to be the same as the default
 *  value’s type.
 *
 *  The function proclaim() can receive a string or undefined as its first
 *  parameter and a number or undefined as its second.
 *
 *  if any other type is provided as an argument,
 *  TypeScript will consider that a type error
 */

function proclaim(status = "not ready...", repeat = 1) {
	for (let i = 0; i < repeat; i += 1) {
		console.log(`I'm ${status}`);
	}
}

proclaim();
proclaim("ready?");
proclaim("ready!", 3);
