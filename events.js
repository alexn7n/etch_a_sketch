const containerElement = document.querySelector("#container")
const squareElement = document.createElement("div")
squareElement.setAttribute("id", "square");
let size = 16
let flexBasis = `${100 / size}%`;
let canvasSize = size*size

const sizeButtonElement = document.querySelector("#size-button")

function createCanvas() {
for (let i = 0; i < canvasSize; i++) {
    containerElement.appendChild(squareElement.cloneNode(true));
    squareElement.style.flexBasis = flexBasis;
  }
}

window.onload = function() {
    createCanvas();
  };

sizeButtonElement.addEventListener('click', handleClickEvent);

function handleClickEvent() {
    let size = prompt("Which size would you like");
    if (size < 100) {
    canvasSize = size*size
    createCanvas();
    } else alert("enter less than 100");
}

