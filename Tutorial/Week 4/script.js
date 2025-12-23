// Question No. 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// arr.forEach((e) => {
//   console.log(e);
// });

// arr.map((e) => {
//   console.log(e);
// });

// Question 2
// const prices = [2400, 3400, 3500, 4300, 1900, 2900, 3100];
// let newPrices = [];
// let price;

// for (let i = 0; i < prices.length; i++) {
//   price = prices[i] + prices[i] * 0.15;
//   newPrices.push(price);
// }

// console.log(newPrices);

// Question 3

// const prices = [2400, 3400, 3500, 4300, 1900, 2900, 3100];

// let updatedPrice = prices.map((e) => {
//   return e + e * 0.15;
// });

// console.log(updatedPrice);

// Question 4

// const books = [
//   { title: "The great Gatsby", rating: 4.2 },
//   { title: "To kill a mocking bird", rating: 4.5 },
//   { title: "1984", rating: 4.9 },
//   { title: "Brave new world", rating: 3.8 },
//   { title: "In search of lost time", rating: 4.2 },
// ];

// let newArr = [];

// for (let i = 0; i < books.length; i++) {
//   if (books[i].rating > 4) {
//     newArr.push(books[i]);
//   }
// }

// console.log(newArr);

// Question 5
// const newArr = books.filter((book) => {
//   return book.rating > 4;
// });

// console.log(newArr);

// Question 6

// const expenses = [10000, 50000, 7050, 2500, 3200, 5200, 1849];
// let sum = 0;

// for (let i = 0; i < expenses.length; i++) {
//   sum = sum + expenses[i];
// }

// console.log(sum);

// Question 7
// Wrong!!!
// const expenses = [10000, 50000, 7050, 2500, 3200, 5200, 1849];

// console.log(expenses.reduce(expenses.reduce(getSum(), 0)));

// function getSum(total, num) {
//   return total + num;
// }

// Question 8

// let printHello = () => {
//   console.log("Hello World!!!");
// };

// printHello();

// Question 9

// let addNumbers = (a, b) => {
//   return a + b;
// };

// console.log(addNumbers(5, 10));

// Question 10

// IIFE is an Immediately Invoked Function Expression which is used one time where as regual function can be used multiple time
// Eg. setTimeOut()

// setTimeout(() => {
//   console.log("Hello!!!");
// }, 3000);

// Question 11

// (function (num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   console.log(fact);
// })(5);

// Question 10
// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//   { name: "Company Two", category: "Retail", start: 1982, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 2001, end: 2009 },
//   { name: "Company Five", category: "Technology", start: 1995, end: 2010 },
//   { name: "Company Six", category: "Finance", start: 2006, end: 2012 },
// ];

// for (let i = 0; i < companies.length; i++) {
//   if (companies[i].end - companies[i].start >= 10) {
//     console.log(companies[i].name);
//   }
// }
