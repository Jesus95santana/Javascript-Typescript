// math program that changes hourly rate to annual slowly
const pay = function(figure) {
    return new Promise((pass, fail)=>{
        console.log('putting that in the program now');
        pass(figure);
    });
};

const hourly = function(salary) {
    return new Promise((pass, fail)=>{
        setTimeout(()=>{
            const pay = salary * 40;
            pass(pay);
        }, 1000);
    });
}

const monthly = function(fullTime) {
    return new Promise((pass, fail)=>{
        setTimeout(()=>{
            month = fullTime * 2;
            pass(month);
        }, 1000);
    });
}

const annually = function(month) {
    return new Promise((pass, fail)=>{
        setTimeout(()=>{
            yearly = month * 12;
            pass(yearly);
        }, 1000);
    });
}
// using old way .then()
pay(10)
.then((firstValue)=>{
    console.log(`Hourly Pay is ${firstValue}`);
    return hourly(firstValue);
})
.then((secondValue)=>{
    console.log(`A paycheck is ${secondValue}`);
    return monthly(secondValue);
})
.then((thirdValue)=>{
    console.log(`Monthly you make ${thirdValue}`);
    return annually(thirdValue);
})
.then((fourthValue)=>{
    console.log(`Annualy you make ${fourthValue}`);
});

//using async method to get everything sent at once
async function doItNow(num) {
    let firstValue = await pay(num);
    console.log(firstValue);
    let secondValue = await hourly(firstValue);
    console.log(secondValue);
    let thirdValue = await monthly(secondValue);
    console.log(thirdValue);
    let fourthValue = await annually(thirdValue);
    console.log(fourthValue);
}

doItNow(10);