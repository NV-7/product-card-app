const names = [
  "Phone",
  "Laptop",
  "Tablet",
  "Monitor",
  "Mouse",
  "Keyboard",
  "Charger",
  "USB Cable",
  "Headphones",
  "Webcam",
];
const prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const totalPrices = sum(...prices); // spread operator iterates through the array prices.

const descriptions = [];

function returnFirstThreeNames(namesList) {
  //destructuring
  let name1, name2, name3;
  [name1, name2, name3] = namesList;
  console.log(name1, name2, name3);
}

function letPractice(age) {
  // The scope of let is only within the block it is in.
  if (age >= 18) {
    let messsage = "Child";
  } else {
    let message = "Adult";
  }
  console.log(message);
  // Will give a reference error because message is not defined.
}

function varPractice(age) {
  // The scope of var is inside the entire function.
  if (age >= 18) {
    var messsage = "Child";
  } else {
    // Const is also available in the function scope.
    const message = "Adult";
  }
  console.log(message);
  // Will not give a reference error because message is defined.
}

function ReturnProductName(names, ...otherNames) {
  let newNames = [othrerNames]; // Rest Operator collects any other arguments.
  return (newNames = names.map((name) => console.log(name)));
}

function FilterPrice(priceList, maxPrice, minPrice) {
  priceList = priceList.filter(
    (price) => price <= maxPrice && price >= minPrice
  );
  console.log(priceList);
  return priceList;
}

FilterPrice(prices, 500, 200);
ReturnProductName(names);
returnFirstThreeNames(names);
