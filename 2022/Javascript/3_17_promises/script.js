button = document.getElementById('orderButton');


const inventory = {
    'blue': 1,
    'red': 2,
    'green': 3
}

const checkBlue = function(resolve, reject) {
    const blue = inventory.blue;
    setTimeout(()=> {
        blue > 0 ? resolve('Theres some blues left!!') : reject('not enough blues available');
    }, 3000);
}

const firstPromise = new Promise(checkBlue);


button.addEventListener('click', ()=>{firstPromise});