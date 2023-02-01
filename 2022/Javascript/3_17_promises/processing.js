const store = {
    glasses : {
        inventory: 10,
        cost: 9.99
    },
    pants : {
        inventory: 5,
        const: 7.99
    },
    shirts : {
        inventory: 2,
        const: 12.99
    }
}

const orderPants = function() {
    const firstPromise = new Promise((resolve, reject) => {
        const pants = store.pants;
        const num = 2;
        num <= pants ? `Processing ${num} pants!` : `Error: we only have ${pants} pants`;
    });

    const passedPromise = function(pass) {
        console.log(pass);
    }

    const failedPromise = function(fail) {
        console.log(fail);
    }
}

const orderGlasses = function() {
    const secondPromise = new Promise((resolved, rejected)=>{
        const glasses = store.glasses;
        const num = 3;
        num <= glasses ? `Processing ${num} glasses!` : `Error: we only have ${glasses} glasses`;
    });

    const handleSuccess = function(pass) {
        console.log(pass);
    }
    const handleFail = function(fail) {
        console.log(fail);
    }
}

const orderShirts = function() {
    const thirdPromise = new Promise((pass, fail)=>{
        const shirts = store.shirts;
        const num = 1;
        num <= shirts ? `Processing ${num} shirts!` : `Error: we only have ${shirts} shirts`;
    });

    const handleSuccess = function(pass) {
        console.log(pass);
    }

    const handleFail = function(fail) {
        console.log(fail);
    }
}

module.exports = {orderPants, orderGlasses, orderShirts};