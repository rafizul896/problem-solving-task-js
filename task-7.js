// Unique Values
// -Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [2, 4, 7, 2, 6, 7, 4, 9, 6, 10, 7, 5];

const getUniqueNumbers = (arr) => {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
};

const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);
