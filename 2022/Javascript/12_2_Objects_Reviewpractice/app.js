// making object list of computer parts
computer = {
  cpu: 'intel i7',
  gpu: 'geforce gtx1660',
  case: 'pink Co.',
  'mother board': 'XTGS 500XA',
  'memory type': 'ssd',
};

// added a new key and value
computer['fan type'] = 'fast af';

// deleted a key and value
delete computer.case;

// console.log(computer.cpu);
// console.log(computer['mother board']);

const computerSpecs = computer;
const graphicsCard = 'gpu';

console.log(computerSpecs[graphicsCard]);
