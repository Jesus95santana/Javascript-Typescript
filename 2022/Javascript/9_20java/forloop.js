// a for loop in a for loop
const bobsFollowers = ['Mom', 'Dad', 'Brother', 'Sister'];
const tinasFollowers = ['Brother', 'Sister', 'Cousin'];
const mutualFollowers = [];

for (let y = 0; y < tinasFollowers.length; y++) {
  for (let x = 0; x < bobsFollowers.length; x++) {
        if (bobsFollowers[x] === tinasFollowers[y]) {
            mutualFollowers.push(bobsFollowers[x]);
            console.log(`The mutual followers are ${mutualFollowers}`);  
        };
    };
};