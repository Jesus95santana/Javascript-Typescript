// promise
const numberFunc = function(num) {
    return new Promise((pass, fail)=>{
        num <= 3 ? pass('pass') : fail('fail');
    });
}
// no await (returns promise)
async function noAwait(num) {
    let value = numberFunc(num);
    console.log(value);
}
// await included (returns value of promise)
async function yesAwait(num) {
    let value = await numberFunc(num);
    console.log(value);
}

noAwait(1);
yesAwait(2);