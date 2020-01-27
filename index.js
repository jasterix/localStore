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
  window.localStorage.clear();
  location.reload();
});

// Delete to-do Item
allItems.addEventListener("click", event => {
  if (event.target.className == "del-btn") {
    console.log(event.target.innerText);
    let text = event.target.parentElement.innerText;
    // let text = event.target.parentElement.innerText.split(" ")[0];
    store.map(x => {
      // work around for remaining "'" record in store and localStorage. Only deletes in window
      if (x === "" || x === "X") {
        window.localStorage.setItem("items", store);
      }

      // Remove item from store and local storage when deleted
      if (`${x} X` === text || x === "X") {
        console.log(store[store.indexOf(x)]);
        store.splice(store.indexOf(x), 1);
        location.reload();
      }
    });
    window.localStorage.setItem("items", store);
  }
});

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
  newItem.innerHTML += ` <button class="del-btn">X</button>`;
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
  store.push(item.trim());

  // Save to localStorage
  window.localStorage.setItem("items", store);
  addItem(input.value);
  input.value = "";
});
