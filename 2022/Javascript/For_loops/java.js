
/* FOR --------This is a for loop generating random numbers with a function
function randomNum() {
    num = Math.floor(Math.random() * 100)
    return num;
}

for (let x = 0; x < 10; x += 1) {
    console.log(randomNum());
};
*/




/* WHILE ---------This is a function with a while loop generating numbers until odd (doesnt have to be in function)
function evenNum() {
    num = Math.floor(Math.random() * 100);
    while (num % 2 === 0) {
        console.log('Im even ' + num);
        num = Math.floor(Math.random() * 100);
    }
} 

evenNum();
*/


/* DO-WHILE ----------This is a simple do while that generates numbers until even (shows even number that stopped it)
do {
    num = Math.floor(Math.random() * 100);
    console.log(`This is number ${num}. Ill stop when even`);
} while (num % 2 != 0);
*/

