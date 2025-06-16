// Task: Advanced Sorting
// -Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const students = [
  { name: "Alice", grades: [85, 90, 78] },
  { name: "Bob", grades: [70, 75, 80] },
  { name: "Charlie", grades: [95, 88, 92] },
  { name: "Diana", grades: [60, 65, 58] },
];

const calculateAverage = (grades) => {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
};

const sortByAverageGradeDescending = (studentsArray) => {
  return studentsArray.sort((a, b) => {
    const avgA = calculateAverage(a.grades);
    const avgB = calculateAverage(b.grades);
    return avgB - avgA; // Descending order
  });
};

const sortedStudents = sortByAverageGradeDescending(students);
console.log(sortedStudents);
