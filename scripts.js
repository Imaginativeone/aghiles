const boxButton = document.getElementById("addBoxButton");
boxButton.addEventListener("click", myFunction);

let boxContainer = document.createElement("div");
boxContainer.id = "boxContainer";

// document.body.appendChild(boxContainer);
document.body.appendChild(boxContainer);

function myFunction() {

  console.log("Button clicked");

  let repeatableBox = document.createElement("div"); // new box
  repeatableBox.classList.add("myDiv");

  let textNode = document.createTextNode("A");

  let someContainer = document.getElementById("box-container");

  // document.body.appendChild(box);
  boxContainer.appendChild(repeatableBox);
  repeatableBox.appendChild(textNode);

  // someContainer.appendChild(textNode);
  someContainer.appendChild(repeatableBox);
}
