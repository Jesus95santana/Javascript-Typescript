// This is an Object
// const pokemon = {
//     grass: 'bulbasaur',
//     fire: 'charmander',
//     water: 'squirtle',
//   };
//
// let name = pokemon.grass;
// console.log(name);

// This is a Method
// const pokemon = {
//   grass: 'bulbasaur',
//   fire: 'charmander',
//   water: 'squirtle',
//   randomIV() {
//     return Math.floor(Math.random() * 31);
//   },
// };
//
// let name = pokemon.grass;
// console.log(pokemon.randomIV());
// console.log(name);

// This is a nested Object

const pokemon = {
    bulbasaur: {
      Type: ['Grass', 'Poison'],
      Weakness: ['Fire', 'Bug', 'Flying'],
      Resistances: ['Electric', 'Water'],
    },
    charmander: {
      Type: ['Fire'],
      Weakness: ['Water', 'Rock', 'Ground'],
      Resistances: ['Grass', 'Steel'],
    },
    squirtle: {
      Type: ['Water'],
      Weakness: ['Electric', 'Grass'],
      Resistances: ['Fire', 'Rock'],
    },
  };

let name = pokemon.bulbasaur;
console.log(name);
