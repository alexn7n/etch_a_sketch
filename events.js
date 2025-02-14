//DOM elements
const containerElement = document.querySelector("#container");
const sizeButtonElement = document.querySelector("#size-button");
const resetButtonElement = document.querySelector("#reset-button");
const rainbowModeElement = document.querySelector("#rainbow");
const opacityModeElement = document.querySelector("#opacity");

//Variables
const INITIAL_SIZE = 16;
let squaresPerSide = INITIAL_SIZE;
let rainbowMode = false;
let opacityMode = false;
let opacity = 0.1;
let hue = 0;

//Page load

window.onload = function () {
  createCanvas();
};

//Add event listeners

sizeButtonElement.addEventListener("click", () => {
  getCanvasSize();
  createCanvas();
});

resetButtonElement.addEventListener("click", () => {
  resetCanvas();
});

rainbowModeElement.addEventListener("click", () => {
  resetCanvas();
  rainbowMode = rainbowModeElement.checked;
  if (rainbowMode) {
    opacityModeElement.checked = false;
    opacityMode = false;
  }
});

opacityModeElement.addEventListener("click", () => {
  resetCanvas();
  opacityMode = opacityModeElement.checked;
  if (opacityMode) {
    rainbowModeElement.checked = false;
    rainbowMode = false;
  }
});

function addEventListeners() {
  let squareElements = document.querySelectorAll(".square");
  squareElements.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      changeSquareColor(square);
    });
  });
}

//Update canvas size

function getCanvasSize() {
  squaresPerSide = prompt("How many squares per side?");
  if (squaresPerSide < 100 && squaresPerSide > 0) {
    return squaresPerSide;
  } else alert("enter a number between 1 and 100");
}

function resetCanvas() {
  clearCanvas();
  createCanvas();
}

function clearCanvas() {
  containerElement.innerHTML = "";
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

function createCanvas() {
  clearCanvas();
  setCanvasSize();
  addEventListeners();
}

//Change square colors

function changeSquareColor(square) {
  if (rainbowMode) {
    applyRainbowMode(square);
  } else if (opacityMode) {
    applyOpacityMode(square) 
  } else square.classList.add("active");
}

function applyRainbowMode(square) {
  hue = (hue + 10) % 360;
  square.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}

function applyOpacityMode(square) {
  opacity = (opacity + 0.005);
  square.style.backgroundColor = `rgba(0 0 0 / ${opacity})`;
}
