// Task 1

// let text = document.getElementById("text");

// text.textContent = "Hello";

// let box = document.getElementsByClassName("box")[0];

// box.style.fontSize = "33px";

// Task 4
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   alert("Button was Clicked");
// });

// Task 5
// let form = document.querySelector("form");

// let box = document.querySelector(".box");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let pName = document.querySelector("#name").value;
//   let pEmail = document.querySelector("#email").value;

//   box.textContent = `Your Name is: ${pName} and Email is: ${pEmail}`;
// });

// // Task 6
let btn = document.querySelector("button");

let box = document.querySelector(".box");

btn.addEventListener("click", () => {
  let ans;
  let userInput = Number(document.querySelector("#user-input").value);
  for (let i = 1; i <= 10; i++) {
    ans = userInput * i;
    box.innerHTML += `${userInput} X ${i} = ${ans} \n`;
    // console.log(`${userInput} X ${i} = ${ans}`);
  }
});

// Task 7
// let box = document.querySelector(".box");
// box.classList.add("hidden");

// Task 8
let oldID = document.getElementById("old-one");

oldID.id = "new-one";
