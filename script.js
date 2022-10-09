const button = document.getElementById('button-random-color');
const pcselected = document.querySelectorAll('.color');
let cor = '#';
const letters = '0123456789ABCDEF';
const cores = ['#000000'];
button.addEventListener('click', () => {
  for (let index = 0; index < 4; index += 1) {
    cor = '#';
    if (index === 0) {
      pcselected[index].style.backgroundColor = '#000000';
    }
    else {
      for (let i = 1; i < 7; i += 1) {
        cor += letters[Math.floor(Math.random() * 16)];
        pcselected[index].style.backgroundColor = cor;
        cores[index] = cor;
      }
    }
localStorage.setItem('colorPalette', JSON.stringify(cores));
}
});
// Salvando Cores do colorPalette
function colorStorage() {
  const recoveredColors = JSON.parse(localStorage.getItem('colorPalette'));
  if (recoveredColors === null) {
    return;
  }
  for (let i = 0; i < pcselected.length; i += 1) {
    pcselected[i].style.backgroundColor = recoveredColors[i];
  };
}
// Preenchendo o quadro de pixels
function fillBoard() {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}
// Trocando cor para pintar
const color = document.getElementsByClassName('color');
function colorSelected(event) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].className = 'color';
  }
  event.target.className += " selected";
}
for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', colorSelected);
}

// Pintando o board
fillBoard();
const boardPixels = document.getElementsByClassName('pixel');
  function paintingBoard(event) {
    const selected = document.querySelector('.selected');
    const pickColor = getComputedStyle(selected);
    event.target.style.backgroundColor = pickColor.backgroundColor;
  }
  for (let i = 0; i < 25; i += 1) {
    boardPixels[i].addEventListener('click', paintingBoard);
  }
// Botão Reset
const resetButton = document.getElementById('clear-board');
function resetBoard() {
  if (boardPixels === null) {
    return;
  }
  for (let i = 0; i < 25; i += 1) {
    boardPixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
resetButton.addEventListener('click', resetBoard);

// Executando funções
window.onload = function(){
colorStorage();
}