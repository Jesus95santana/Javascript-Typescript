// with Constructor
const withConstructor = function(num) {
    return new Promise((pass, fail)=>{
        num === 0 ? pass('Zero') : fail('not Zero');
    });
};

withConstructor(0)
.then((resolvedValue)=>{
    console.log(resolvedValue);
});

// with Async
const withAsync = async function(num) {
    return num == 0 ? 'zero' : 'not zero' ;
}

withAsync(1)
.then((passedValue)=>{
    console.log(passedValue);
});

