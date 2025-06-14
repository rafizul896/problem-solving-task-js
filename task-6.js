// Array Reduction
// -Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [10, 7, 4, 13, 6, 9, 2, 5];

const sumEvenNumbers = (arr) =>
  arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

const evenSum = sumEvenNumbers(numbers);
console.log(evenSum);
