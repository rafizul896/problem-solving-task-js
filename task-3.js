// Task: Function Composition
// -Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (n) => n * n;
const double = (n) => n * 2;
const addFive = (n) => n + 5;

const composed = (n) => addFive(double(square(n)));

console.log(composed(5)); // 55
