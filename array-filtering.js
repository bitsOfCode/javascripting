// Two methods defined

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Method 1
const filtered1 = numbers.filter(function (number) {
  if ((number % 2) === 0) return number;
});

//Method 2
const filtered2 = numbers.filter(number => {if ((number % 2) === 0) return number;});

console.log(filtered1);
console.log(filtered2);