const containerElement = document.querySelector("#container");
const sizeButtonElement = document.querySelector("#size-button")

let squaresPerSide = 16;

window.onload = function() {
  createCanvas();
};

sizeButtonElement.addEventListener('click', handleClickEvent);

function handleClickEvent() {
    clearCanvas();
    squaresPerSide = prompt("How many squares per side?");
    if (squaresPerSide < 100 && squaresPerSide > 0) {
    createCanvas(squaresPerSide);
    } else alert("enter a number between 1 and 100");
}

function clearCanvas() {
  containerElement.innerHTML = '';
}

function createCanvas() {

  const squareSize = 100 / squaresPerSide;
  const canvasSize = squaresPerSide * squaresPerSide;

for (let i = 0; i < canvasSize; i++) {
    const squareElement = document.createElement("div");
    squareElement.setAttribute("id", "square");
    squareElement.style.flexBasis = `${squareSize}%`;
    squareElement.style.aspectRatio = "1 / 1";
    containerElement.appendChild(squareElement.cloneNode(true));
  }
}



