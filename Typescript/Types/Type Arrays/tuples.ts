/**
 * In TypeScript, when an array
 * is typed with elements of specific types,
 * it’s called a tuple. The tuple below (ourTuple)
 * contains the elements: 'Is', 7 , 'our favorite number?' ,
 * false and the tuple has a type of [string, number, string, boolean].
 * Tuple types specify both the lengths and the orders of
 * compatible tuples, and will cause an error if either of
 * these conditions are not met:
 */

// be careful with tuples as they are strinct
// you may need spread(..ourTuple -> Variable), rest(..ourTuple), or .concat!!!
let ourTuple: [string, number, string, boolean] = ["Is", 7, "our favorite number?", false];
