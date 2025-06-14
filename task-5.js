// Task: Find and Modify
// -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const peoples = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
  { name: "Diana", age: 22 },
];

const updatePersonAge = (nameToFind, newAge) => {
  const isExist = peoples.find((p) => p.name === nameToFind);

  if (isExist) {
    isExist.age = newAge;

    console.log(peoples);
  } else {
    console.log(`Person with name "${nameToFind}" not found.`);
  }
};

updatePersonAge("Charlie", 35);
