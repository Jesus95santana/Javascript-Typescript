
const userInput = document.getElementById('endUser');
const showInput = document.getElementById('endUserCopy');

const userTarget = document.getElementById('endUserTarget');
const showTarget = document.getElementById('endUserTargetCopy');

const submitButton = document.querySelector('button');

submitButton.addEventListener('click', twoSum);

function twoSum(numbers, value) {
  showInput.innerHTML = userInput.value;
  string = userInput.value;
  nums = string.split(', ').map(Number);
  target = parseInt(userTarget.value, 10);

  console.log(nums, target);
  loop1:
  for (let i = 0; i < nums.length; i++) {
    loop2:
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        const outputParent = document.getElementById('outputParent');
        const newP = document.createElement('p');
        newP.innerHTML = `${nums[i]} and ${nums[j]} equal ${target}`;
        outputParent.appendChild(newP);
        console.log(`${nums[i]} and ${nums[j]} equal ${target}`);
        break loop2;
      }
    }
  }
};


// submitButton.addEventListener('click', () => {
//   changeInput();
//   math(userInput);
// });

// function changeInput() {
//   showInput.innerHTML = userInput.value;
// };
//
// function math(input) {
//   const nums = input.value;
//   const answer = parseInt(nums, 10) + 1;
//   showTarget.innerHTML = `1 + ${nums} = ${answer}`;
// };
