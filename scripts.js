// Hard coded data, will be replaced with local storage (database)
const items = [
  { id: "001", name: "Katana", location: 1000 },
  { id: "002", name: "Boxing Gloves", location: 100 },
  { id: "003", name: "Bike", location: 100 },
  { id: "004", name: "Hockey Stick", location: 115 },
  { id: "005", name: "Football", location: 25 },
  { id: "006", name: "Basketball", location: 30 },
  { id: "007", name: "Soccer Ball", location: 100 },
  { id: "008", name: "Volleyball", location: 100 },
  { id: "009", name: "Bocce Ball", location: 100 },
  { id: "010", name: "Tennis Ball", location: 100 },
];

// Shopping Functions //////////////////////
const item = document.getElementById('item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const shopForItem = n => {
  item.innerHTML = items[n].name;
};

let index = 0; // This is also used in the showItem function, see line 38

shopForItem(index);
next.addEventListener('click', () => {
  index = (index + 1) % items.length;
  shopForItem(index);
});

prev.addEventListener('click', () => {
  index = (index +  items.length - 1) % items.length;
  shopForItem(index);
});
// End of Shopping Functions //////////////////////

// Add Item Functions /////////////////////////////////////

const selectedItems = []; // These appear as selections for searching

const boxButton = document.getElementById("addItemButton");
boxButton.addEventListener("click", () => showItem(index));

let boxContainer = document.getElementById("box-container");
boxContainer.classList.add("box-container");

function showItem(n) {
  let item = items[n];

  const itemsContainer = document.getElementById("items-container");
  itemsContainer.classList.add("items-container");

  item.innerHTML = items[n].name;

  console.log(item);

  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  itemDiv.innerHTML = `
  <div class="item-name">${item.name}</div>
  <div class="item-location">${item.location}</div>
  <div class="item-id">${item.id}</div>
  `;

  itemsContainer.appendChild(itemDiv);

  selectedItems.push(item);
}
// End of Add Item Functions //////////////////////

// Search Functions //////////////////////////////
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", handleSearch);

function handleSearch(e) {

  const searchString = e.target.value.toLowerCase();

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchString) ||
      item.id.toLowerCase().includes(searchString)
    );
  });

  console.log(filteredItems);
}

// Database Functions
const save = () => {};
const allData = () => {};
const removeData = () => {};
const find = (id) => {};
const read = () => {};
const update = () => {};
