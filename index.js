// Using localStorage
// setItem(): Add key and value to localStorage
// getItem(): Retrieve a value by the key from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve nth key of a localStorage

const form = document.querySelector("form");
const input = document.getElementById("input");
const ul = document.querySelector("ul");

let store = ["hi"];

const addItem = text => {
  let newItem = document.createElement("li");
  newItem.innerText = text;
  ul.appendChild(newItem);
  return `${text} added!`;
};

// form events
form.addEventListener("submit", event => {
  event.preventDefault();
  store.push(input.value);
  localStorage.setItem("items", JSON.stringify(store));
  addItem(input.value);
  input.value = "";
});

console.log(store.length);

// Save to localStorage
localStorage.setItem("items", store);

// for (let i = 0; i < store.length; i++) {
//   console.log(store[i]);
// }

store.forEach(item => {
  console.log(item);
  addItem(item);
  console.log(store);
});
