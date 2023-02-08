/**
 *  To indicate that a parameter is intentionally optional,
 *  we add a ? after its name. This tells TypeScript that the parameter
 *  is allowed to be undefined and doesn’t always have to be provided.
 */

function proclaim(status?: string) {
	console.log(`I'm ${status || "not ready..."}`);
}

proclaim();
proclaim("ready?");
proclaim("ready!");
