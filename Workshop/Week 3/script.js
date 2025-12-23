// Question No. 1

// let num = parseInt(prompt("Enter any number: "));

// if (num > 0 && num % 2 == 0) {
//   console.log(num + " is both even and positive");
// } else {
//   console.log(num + " is either odd or negative");
// }

// Question No. 2
// function printArray(number) {
//   var newArray = [];

//   for (var i = 1; i <= number; i++) {
//     newArray.push(i);
//   }

//   return newArray;
// }

// console.log(printArray(5));

// Question No. 3

// let arr = [true, false, true, true, false, true];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == true) {
//     count++;
//   }
// }

// console.log("Total numbers of true value is: ", count);

// Question No. 4

// const giveMeSomething = (strVal) => {
//   return `something ${strVal}`;
//   //   return "something " + strVal;
// };

// console.log(giveMeSomething("went wrong!!!"));

// Question 5

// let userInput = parseInt(prompt("Enter any number: "));

// function checkNum(num) {
//   if (num % 4 == 0 && num % 6 == 0 && num % 8 != 0) {
//     console.log("It is divisible by 4 and 6 byt not by 8");
//   } else {
//     console.log("False");
//   }
// }

// checkNum(userInput);

// Question No. 6

// let num = parseInt(prompt("Enter any number: "));
// if (num < 0) {
//   console.log(num + " is negative.");
// } else {
//   console.log(num + " is Positive.");
// }

// Question 7
// function countVote(upVote, downVote) {
//   if (upVote > downVote) {
//     console.log(upVote - downVote);
//   } else {
//     console.log(downVote - upVote);
//   }
// }

// countVote(1150, 100);

// Question 8

// Question 9

// function getTotalPrice(grocery) {
//   let totalPrice = 0;
//   for (let i = 0; i < grocery.length; i++) {
//     totalPrice += grocery[i].quantity * grocery[i].price;
//   }
//   console.log("Total Price: " + totalPrice);
// }

// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.5 },
//   { product: "Milk", quantity: 1, price: 1.5 },
//   { product: "Milk", quantity: 1, price: 1.5 },
//   { product: "Milk", quantity: 1, price: 1.5 },
// ]);

//  Question 10
// let hoursList = [];
// let salaryCount;

// for (let i = 0; i < 7; i++) {
//   let hour = prompt("Enter hours: ");
//   hoursList.push(hour);
// }

// for (let i = 0; i < 7; i++) {
//   if (hoursList[i] < 8) {
//     salaryCount = hoursList[i] * 10;
//   } else {
//     salaryCount = hoursList[i] * 15;
//   }

//   if (i == 6) {
//     salaryCount = hoursList[i] ** 2;
//   }
// }

// let salaryCount = (hours) => {
//   let total = 0;

//   for (let i = 0; i < hours.length; i++) {
//     let hour = hours[i];
//     let isWeekend;

//     if (i == 5 || i == 6) {
//       isWeekend = true;
//     } else {
//       isWeekend = false;
//     }

//     if (isWeekend == true) {
//       if (hour <= 8) {
//         total = total + hour * 20;
//       } else {
//         total = total + 8 * 20;
//         total = total + (hour - 8) * 30;
//       }
//     }
//     // Weekday salary calculation
//     else {
//       if (hour <= 8) {
//         total = total + hour * 10;
//       } else {
//         total = total + 8 * 10;
//         total = total + (hour - 8) * 15;
//       }
//     }
//   }

//   return total;
// };

// console.log(salaryCount([6, 10, 2, 9, 4, 10, 11]));

const getBestStudent = (students) => {
  let bestStudent = "";
  let highestAverage = 0;

  for (let student in students) {
    let marks = students[student];
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
      total = total + marks[i];
    }

    let average = total / marks.length;

    if (average > highestAverage) {
      highestAverage = average;
      bestStudent = student;
    }
  }

  return bestStudent;
};

console.log(
  getBestStudent({
    Aashutosh: [97, 84, 95, 93],
    student2: [27, 44, 71, 61],
    student3: [91, 41, 62, 52],
  })
);
