
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
  inputCanvasSize();
});

function inputCanvasSize() {
    clearCanvas();
    squaresPerSide = prompt("How many squares per side?");
    if (squaresPerSide < 100 && squaresPerSide > 0) {
    createCanvas(squaresPerSide);
    attachMouseEnterListeners();
    } else alert("enter a number between 1 and 100");
}

resetButtonElement.addEventListener("click", () => {
  resetCanvas();
});

function resetCanvas() {
  clearCanvas()
  squaresPerSide = INITIAL_SIZE;
  createCanvas();
}

function clearCanvas() {
  containerElement.innerHTML = '';
}

function createCanvas() {

  const squareSize = 100 / squaresPerSide;
  const canvasSize = squaresPerSide * squaresPerSide;

for (let i = 0; i < canvasSize; i++) {
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");
    squareElement.style.flexBasis = `${squareSize}%`;
    containerElement.appendChild(squareElement);
  }
}

function attachMouseEnterListeners() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.target.classList.add("active");
    });
  });
}





