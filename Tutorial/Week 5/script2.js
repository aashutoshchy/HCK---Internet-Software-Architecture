// Task 1

let btn = document.querySelector("button");
let output = document.querySelector(".output");
let userInput = document.querySelector("input");

btn.addEventListener("click", () => {
  output.innerHTML += `You Entered: ${userInput.value} </br>`;
});

// Task 2
// let myButton = document.getElementById("myButton");
// myButton.addEventListener("click", () => {
//   console.log("Button clicked!");
// });

// Task 3
// let sampleObject = [
//   {
//     name: "aashutosh",
//     age: "19",
//     place: "Lalitpur",
//   },
//   {
//     name: "hary",
//     age: "31",
//     place: "Bhaktapur",
//   },
//   {
//     name: "merry",
//     age: "18",
//     place: "Kathmandu",
//   },
//   {
//     name: "jerry",
//     age: "32",
//     place: "Kirtipur",
//   },
// ];

// let searchBtn = document.querySelector(".searchBtn");
// let found = false;

// searchBtn.addEventListener("click", () => {
//   let uName = document.querySelector("input").value.toLowerCase().trim();
//   sampleObject.forEach((e) => {
//     if (uName === e.name) {
//       console.log(`Age for ${uName} is ${e.age}`);
//       found = true;
//     }
//   });
//   if (!found) {
//     console.log("User not found");
//   }
// });

// // Question 4
// // Question 4

// For Loop
const lists = document.querySelectorAll("li");

for (let i = 0; i < lists.length; i++) {
  lists[i].style.backgroundColor = "yellow";
}

// For Each
lists.forEach((list) => {
  list.style.fontWeight = "Bold";
});

// Map
Array.from(lists).map((item) => {
  item.innerHTML = `<span>${item.innerHTML}</span>`;
});

// Question 5
const userData = {
  name: "Aashutosh",
  email: "aaaaashutosh@gmail.com",
  age: 19,
};

function fetchUserData(userId, callback) {
  userData.userId = userId;

  setTimeout(() => {
    callback(userData);
  }, 1000);
}

function displayUserData(data) {
  console.log(data);
}

fetchUserData(123, displayUserData);
