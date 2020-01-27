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

// Clear localStorage / TO DO List
clear.addEventListener("click", () => {
  console.log(localStorage);
  window.localStorage.clear();
});

// Delete to-do Item
if (store.length > 1) {
  del.addEventListener("click", () => {
    console.log("click");
  });
} else {
  null;
}

window.addEventListener("load", () => {
  if (localStorage.getItem("items") === null) {
    store = [];
  } else {
    let items = window.localStorage.getItem("items").split(",");
    store = items;
    return items.map(text => {
      makeLi(text);
    });
  }
});

// Add new list item
const makeLi = text => {
  let newItem = document.createElement("li");
  newItem.innerText = text;
  newItem.innerHTML += newItem.innerHTML = `<button id="del">Delete</button>`;
  ul.append(newItem);
};

const addItem = text => {
  makeLi(text);
};

// form events
form.addEventListener("submit", event => {
  event.preventDefault();

  // Add form input to store array
  let item = input.value;
  store.unshift(item);
  console.log(store);

  // Save to localStorage
  window.localStorage.setItem("items", store);
  addItem(input.value);
  input.value = "";
});
