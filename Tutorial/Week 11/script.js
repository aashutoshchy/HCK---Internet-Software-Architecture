localStorage.setItem("Key-Name", "Value");

const output = localStorage.getItem("Key-Name");
console.log(output);

localStorage.removeItem("Key-Name");

const obj = {
  name: "Aashutosh",
  age: 19,
};

// Does no work
// localStorage.setItem("obj", obj);

// JSON.stringify() = JSON.stringify() can not only convert objects and arrays into JSON strings, it can convert any JavaScript value into a string.
localStorage.setItem("obj", JSON.stringify(obj));

// JSON.parse() is used in JavaScript to parse a JSON-formatted string and convert it into a native JavaScript object or value.
const jsonVal = JSON.parse(localStorage.getItem("obj"));

console.log(jsonVal);
// console.log(typeof jsonVal);
