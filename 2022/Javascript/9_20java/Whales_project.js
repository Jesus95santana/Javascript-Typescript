const input = 'Ta whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (x = 0; input.length > x; x++) {
    for (y = 0; vowels.length > y; y++) {
        if (vowels[y] === input[x]) {
            resultArray.push(vowels[y]);
        };
    };
    if (input[x] === 'u') {
        resultArray.push(input[x]);
    } else if (input[x] === 'e') {
            resultArray.push(input[x]);
    };
};

const whaleTrans = resultArray.join(' ');
const whaleSpeech = whaleTrans.toUpperCase();

console.log(whaleSpeech);
