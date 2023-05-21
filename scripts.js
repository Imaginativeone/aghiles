const boxButton = document.getElementById("addBoxButton");
boxButton.addEventListener("click", myFunction);

let boxContainer = document.getElementById("box-container");
boxContainer.classList.add("box-container");

function myFunction() {

  console.log("Button clicked");

  let repeatableBox = document.createElement("div"); // new box
  repeatableBox.classList.add("myDiv");

  let textNode = document.createTextNode("A");

  boxContainer.appendChild(repeatableBox);
  repeatableBox.appendChild(textNode);
}
