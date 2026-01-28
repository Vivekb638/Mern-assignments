/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const map = {};

  // Step 1: Aggregate prices by category
  for (let i = 0; i < transactions.length; i++) {
    const category = transactions[i].category;
    const price = transactions[i].price;

    if (map[category]) {
      map[category] += price;
    } else {
      map[category] = price;
    }
  }

  // Step 2: Convert map to required output format
  const result = [];
  for (const category in map) {
    result.push({
      category: category,
      totalSpent: map[category]
    });
  }

  return result;
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza"
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: "Food",
    itemName: "Burger"
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 50,
    category: "Clothes",
    itemName: "Shirt"
  },
  {
    id: 4,
    timestamp: 1656076800000,
    price: 30,
    category: "Clothes",
    itemName: "Jeans"
  }
];

const output = calculateTotalSpentByCategory(transactions);
console.log(output);

module.exports = calculateTotalSpentByCategory;
