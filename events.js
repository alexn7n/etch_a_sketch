
//Variables
const INITIAL_SIZE = 16;
let squaresPerSide = INITIAL_SIZE;

//DOM elements
const containerElement = document.querySelector("#container");
const sizeButtonElement = document.querySelector("#size-button");
const resetButtonElement = document.querySelector("#reset-button");

//Page load
window.onload = function() {
  createCanvas();
};

sizeButtonElement.addEventListener("click", () => {
  getCanvasSize();
});

resetButtonElement.addEventListener("click", () => {
  resetCanvas();
});

function inputCanvasSize() {
    squaresPerSide = prompt("How many squares per side?");
    if (squaresPerSide < 100 && squaresPerSide > 0) {
    createCanvas(squaresPerSide);
    } else alert("enter a number between 1 and 100");
}

function resetCanvas() {
  clearCanvas()
  squaresPerSide = INITIAL_SIZE;
  createCanvas();
}

function clearCanvas() {
  containerElement.innerHTML = '';
}

function setCanvasSize() {

  const squareSize = 100 / squaresPerSide;
  const canvasSize = squaresPerSide * squaresPerSide;

for (let i = 0; i < canvasSize; i++) {
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");
    squareElement.style.flexBasis = `${squareSize}%`;
    containerElement.appendChild(squareElement);
  }
}

function addEventListeners() {
  let squareElements = document.querySelectorAll(".square");

  squareElements.forEach(square => {
    square.addEventListener("mouseenter", () => {
      square.classList.add("active");
    });
  });
}

function createCanvas() {
  clearCanvas();
  setCanvasSize();
  addEventListeners();
}







