// Using localStorage
// setItem(): Add key and value to localStorage
// getItem(): Retrieve a value by the key from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve nth key of a localStorage

const form = document.querySelector("form");
const input = document.getElementById("input");
const ul = document.querySelector("ul");

let store = [];

const addItem = text => {
  let newItem = document.createElement("li");
  newItem.innerText = text;
  ul.appendChild(newItem);
  console.log(store);
  return `${text} added!`;
};

// form events
form.addEventListener("submit", event => {
  event.preventDefault();
  store.push(input.value); //need for ls

  // Save to localStorage
  localStorage.setItem("items", JSON.stringify(store));
  addItem(input.value);
  input.value = "";
});
