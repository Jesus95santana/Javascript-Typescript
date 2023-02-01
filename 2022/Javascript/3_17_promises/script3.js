button = document.getElementById('orderButton');

const inventory = {
    'blue': 1,
    'red': 2,
    'green': 3
}

const orderConfirm = function() {
    const firstPromise = new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 7);
        const green = inventory.green;
        randomNum <= green ? resolve('Order Confirmed') : reject(`Error: You want ${randomNum} and there are ${green} green left...`);
    });

    const handleSuccess = function(pass) {
        console.log(pass);
    }

    const handleFailure = function(fail) {
        console.log(fail);
    }

    firstPromise
    .then(handleSuccess)
    .catch(handleFailure);

}




button.addEventListener('click', orderConfirm);