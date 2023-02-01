const brainstormDinner = require('./library.js');

// Native Promise Version
function nativePromise() {
    brainstormDinner()
    .then((meal)=>{
        console.log(`I'm making ${meal} for dinner`);
    })
}

async function announceDinner() {
    let meal = await brainstormDinner();
    console.log(`I'm making ${meal} for dinner`);
}

