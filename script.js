window.onload = function () {
    const button = document.getElementById('button-random-color');
    const board = document.getElementById('pixel-board');
    let pcselected = document.querySelectorAll('.color');
    let colors = ['#000000'];
    button.addEventListener('click', function () {
        let cor = '#';
        let letters = '0123456789ABCDEF';
        for (index = 1; index < 4; index += 1) {
            cor = '#';
            for (let i = 0; i < 7; i += 1) {
                cor += letters[Math.floor(Math.random() * 16)];
                pcselected[index].style.backgroundColor = cor;
            }
            localStorage.setItem('colorPalette', JSON.stringify(pcselected.style.backgroundColor));
        }
    })
}


// Preenchendo o quadro de pixels
const line = document.getElementsByClassName('line');
fillBoard(line);

function createpixel(classIdentify) {
    const pixel = document.createElement('div');
    pixel.className = classIdentify;
    pixel.style.backgroundColor = 'white';
    pixel.style.border = '10px solid red';
    return pixel;
}
function fillLine(divLine) {
    for (let i = 1; i < 6; i += 1) {
        const pixel = createpixel('pixel');
        divLine.appendChild(pixel);
    }
}
function fillBoard(lines) {
    for (let i = 0; i < lines.length; i += 1) {
        fillLine(lines[i]);
    }
}

console.log(line);
