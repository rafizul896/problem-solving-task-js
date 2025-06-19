// Task: Functional Programming - Reduce
// -Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

function calculateTotalValue(products) {
  return products.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
}

const items = [
  { name: 'Pen', quantity: 2, price: 10 },
  { name: 'Notebook', quantity: 1, price: 50 },
  { name: 'Pencil', quantity: 5, price: 5 }
];

const totalValue = calculateTotalValue(items);
console.log("Total Value:", totalValue); 
