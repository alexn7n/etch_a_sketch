const containerElement = document.querySelector("#container")
const squareElement = document.createElement("div")
squareElement.setAttribute("id", "square");
const NUMBER_OF_SQUARES = 16*16

function createCanvas() {
for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
    containerElement.appendChild(squareElement.cloneNode(true));
  }
}

window.onload = function() {
    createCanvas(NUMBER_OF_SQUARES, containerElement, squareElement);
  };

