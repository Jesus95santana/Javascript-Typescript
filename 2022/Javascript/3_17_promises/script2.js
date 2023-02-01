button = document.getElementById('orderButton');
// inventory
const inventory = {
    'red': 1,
    'blue': 2,
    'green': 3
}
// declaration
const checkOrder = function() {
    const firstPromise = new Promise((resolve, reject) => {
            const randomNum = Math.floor(Math.random() * 6);
            const blue = inventory.blue;
            randomNum <= blue ? resolve('we have it!') : reject('we dont have it...');
        });

        const handleSuccess = function(pass) {
            console.log(pass);
        }
        
        const handleFailure = function(fail) {
            console.log(fail);
        }
        
        firstPromise.then(handleSuccess, handleFailure);
    }

button.addEventListener('click', checkOrder);