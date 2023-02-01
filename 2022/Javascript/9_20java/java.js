/* Part I
 const randomNumber = (Math.random()*100)
 console.log(Math.round(randomNumber));
 sum = 5 + 5;
 console.log(sum); */








 /* Part II
let num = 5;
if (5 > num) {
    console.log(`5 is greater than ${num}`);
} else if (5< num) {
    console.log(`5 is less than ${num}`);
} else {
    console.log("what?");
}
*/








/* Part III
 ----------Function Declaration

function payCalc(hours,wage) {
    pay = hours * wage;
    return pay;
};
console.log(payCalc(8,10));
*/

/* 
------------Function (Default Parameters)

function payCalc(hours = 4, wage = 7) {
    pay = hours * wage;
    return pay;
};
console.log(`Since you put hours we will calculate ${payCalc(8,10)}$ to your account`);
console.log(`Since you didnt put your hours ${payCalc()}$ will just be added to your account`);

------------------------------------or-------------------------------------------

function payCalc(hours = 4, wage = 7) {
    return hours * wage;
};
const pay = payCalc(8,10);
console.log(pay);

console.log(`Since you put hours we will calculate ${pay}$ to your account`);

*/

/* 
-------------Helper Function

---- wage turns into money
function salCal(money) {
    return money*days;
};
----- pay(10) turns into wage as we shove it to salCal
function pay(wage) {
    return salCal(wage)*hours;
};

const days = 5;
const hours = 8;
---- we input 10 as a value for pay
const weekpay = pay(10);

console.log(weekpay);
*/

/* 
--------------Function Expressions

const payCalc = function(hours,wage) {
    const pay = hours * wage;
    return pay;
};
console.log(payCalc(8,10));
*/

/* 
-------------Arrow Functions

const payCalc = (hours,wage) => {
    const pay = hours*wage;
    return pay
};
console.log(payCalc(8,10));
*/