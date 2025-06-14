// Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const peoples = [
  { name: "Jamal", age: 18, gender: "male" },
  { name: "Jamila", age: 18, gender: "female" },
  { name: "kamal", age: 18, gender: "male" },
  { name: "kamila", age: 18, gender: "female" },
  { name: "tamal", age: 18, gender: "male" },
];

// filter out all females and Map the remaining people to an array of names
const maleNames = peoples
  .filter((person) => person.gender !== "female")
  .map((person) => person.name);

// Print the final result
console.log("Filtered male names: ", maleNames);
