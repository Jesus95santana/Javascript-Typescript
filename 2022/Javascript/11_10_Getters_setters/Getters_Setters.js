//getters and setters

const person = {
    firstName: 'John',
    lastName: 'Cena',
    // get fullName is a "function-like Variable" that just combines first and last name
    // Typing get allows fullname to be reached from outside the object
    get fullName() {
       return this.firstName + ' ' + this.lastName
    },
    // set fullName is a function that spits the name into two and assigns them toward firstname & lastname
    // typing set modifys variables inside the object from outside.

    set fullName(value) {
        nameParts = value.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    },
};
//were able to obtain getters here

person.fullName = 'Piggly WIggly';

console.log(person.fullName);
