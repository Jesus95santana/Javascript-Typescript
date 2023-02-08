function logGreeting(name: string) {
	console.log(`Hello, ${name}!`);
}
/**
 *  The function logGreeting() simply logs a greeting
 * to the console. There is no returned value, so we must treat
 * the return type as void. A proper type annotation for this
 * function would look like this:
 * */

function logGreeting(name: string): void {
	console.log(`Hello, ${name}!`);
}
