const tableMax = 12;
let numbers = 'x';

for (i = 0; i <= tableMax; i++) {
    for (x = 0; x <= tableMax; x++) {
        if (x > 0 && i === 0) {
            numbers += `[${x}]`;
        } else if (i > 0 && x ===0) {
            numbers += `[${i}]`;
        } else if (i > 0 && x > 0) {
            numbers+= (x*i) + ' ';
        };
        }
    numbers += '\n'
};
console.log(numbers);