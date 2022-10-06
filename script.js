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
    window.localStorage.setItem('colorPalette', JSON.stringify(cores));
  }
});

function colorStorage() {
  const recoveredColors = JSON.parse(window.localStorage.getItem('colorPalette'));
  for (let i = 0; i < pcselected.length; i += 1) {
    pcselected[i].style.backgroundColor = recoveredColors[i];
  }
}
function fillBoard() {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}

function colorSelected(){
    
}

// Preenchendo o quadro de pixels
// Executando funções
document.onload = function (){
colorStorage();
}

fillBoard();