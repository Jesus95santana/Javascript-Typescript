// Create class and makeing getters, setters, and methods

//================================== Dog Class

// class Dog {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }

//   get name() {
//     return this._name;
//   }

//   get behavior() {
//     return this.behavior;
//   }

//   incrementBehavior() {
//     this.behavior++;
//   }
// }

// const Ashley = new Dog('Ashley');
// console.log(Ashley.name);

//=============================== Cat Class

// class Cat {
//   constructor(name, useLitter) {
//     this._name = name;
//     this._useLitter = useLitter;
//   }

//   get name() {
//     return this._name;
//   }

//   get useLitter() {
//     return this._useLitter;
//   }

// }

// const maggie = new Cat('maggie', 'no');
// console.log(maggie.useLitter);

//=================================== Shared Dog/Cat Class

// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }

//   get name() {
//     return this._name;
//   }

//   get behavior() {
//     return this._behavior;
//   }

//   increasebehavior(badpoints) {
//     this._behavior += badpoints;
//   }
// }

//================================== Link CREATED(Cat class) to Animal Class

// class Cat extends Animal {
//   constructor(name, useLitter) {
//     super(name);
//     this._useLitter = useLitter;
//   }
// }

// const kitty = new Cat('anakin', 'no');
// console.log(kitty._useLitter);

//================================== Method Inheritance

// kitty.increasebehavior(10);
// console.log(kitty.behavior);

//================================== Method Add(Push)

// class Cat extends Animal {
//   constructor(name, useLitter, vax) {
//     super(name);
//     this._useLitter = useLitter;
//     this._vax = vax;
//   }

//   get vax() {
//     return this._vax;
//   }

//   addVax(inj) {
//     this._vax.push(inj);
//   }
// }

// const kitty = new Cat('anakin', 'no', ['bordatella', 'lepto']);
// console.log(kitty.vax);

// kitty.addVax('rabies');
// console.log(kitty.vax);

//============================== Static methods (only called via MAIN PARENT)

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  increasebehavior(badpoints) {
    this._behavior += badpoints;
  }

  static generateName() {
    const names = ['bob', 'larry', 'karen', 'bubba', 'lisa'];
    const randomnum = Math.floor(Math.random() * 5);
    return names[randomnum];
  }
}

console.log(Animal.generateName());
