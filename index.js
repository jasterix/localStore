// Using localStorage
// setItem(): Add key and value to localStorage
// getItem(): Retrieve a value by the key from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve nth key of a localStorage

const form = document.querySelector("form");
const input = document.getElementById("item");

let store = [];
form.addEventListener("submit", event => {
  event.preventDefault();
  store.push(input.value);
  console.log(store, input);
});

// Test localStorage
