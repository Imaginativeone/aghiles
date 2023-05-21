// Hard coded data, will be replaced with local storage (database)
const items = [
  { id: "001", name: "Katana", price: 1000 },
  { id: "002", name: "Boxing Gloves", price: 100 },
  { id: "003", name: "Bike", price: 100 },
  { id: "004", name: "Hockey Stick", price: 115 },
  { id: "005", name: "Football", price: 25 },
  { id: "006", name: "Basketball", price: 30 },
  { id: "007", name: "Soccer Ball", price: 100 },
  { id: "008", name: "Volleyball", price: 100 },
  { id: "009", name: "Bocce Ball", price: 100 },
  { id: "010", name: "Tennis Ball", price: 100 },
];

const item = document.getElementById('item')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let index = 0

// const showItem = n => {
//   item.innerHTML = items[n].name
// }

showItem(index)
next.addEventListener('click', () => {
  index = (index + 1) % items.length 
  showItem(index)
})

prev.addEventListener('click', () => {
  index = (index +  items.length - 1) % items.length 
  showItem(index)
})

const boxButton = document.getElementById("addBoxButton");
// boxButton.addEventListener("click", myFunction);
// boxButton.addEventListener("click", () => showItem(items[0]));
// boxButton.addEventListener("click", () => loopItems);
boxButton.addEventListener("click", () => showItem(index));

let boxContainer = document.getElementById("box-container");
boxContainer.classList.add("box-container");

// https://stackoverflow.com/questions/74459851/how-to-iterate-through-an-array-on-each-click-of-an-event-listener
function showItem(n) {

  let item = items[n];

  const itemsContainer = document.getElementById("items-container");
  itemsContainer.classList.add("items-container");

  item.innerHTML = items[n].name

  console.log(item);

  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  itemDiv.innerHTML = `
  <div class="item-name">${item.name}</div>
  <div class="item-price">${item.price}</div>
  <div class="item-id">${item.id}</div>
  `;
  itemsContainer.appendChild(itemDiv);
}

// function showItems() {
//   const itemsContainer = document.getElementById("items-container");
//   itemsContainer.classList.add("items-container");

//   items.forEach((item) => {
//     const itemDiv = document.createElement("div");
//     itemDiv.classList.add("item");
//     itemDiv.innerHTML = `
//     <div class="item-name">${item.name}</div>
//     <div class="item-price">${item.price}</div>
//     <div class="item-id">${item.id}</div>
//     `;
//     itemsContainer.appendChild(itemDiv);
//   });
// }

function myFunction() {

  console.log("Button clicked");

  let repeatableBox = document.createElement("div"); // new box
  repeatableBox.classList.add("myDiv");

  let textNode = document.createTextNode("A");

  boxContainer.appendChild(repeatableBox);
  repeatableBox.appendChild(textNode);
}
