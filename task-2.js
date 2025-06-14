// Task: Object Manipulation :-
// -Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "Atomic Habits", author: "James Clear", year: 2018 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
];

// Create a function to extract only the book titles
const getBookTitles = (bookArr) => {
  return bookArr.map((book) => book.title);
};

const titles = getBookTitles(books);

// Print the result
console.log(titles);
