let color = 'black'

const gridSlider = document.getElementById('gridSlider');
const gridValue = document.getElementById('gridValue');
const knob = document.querySelector('.knob')

function boardDivs(size) {

let board = document.querySelector('.board')
let squares = board. querySelectorAll('div')
squares.forEach((div) => div.remove())
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
board.style.gridTemplateRows = `repeat(${size}, 1fr)`

let amount = size * size
for (let i = 0; i < amount; i++) {
let square = document.createElement('div')
square.addEventListener('mouseover', squareColor)
square.style.backgroundColor = 'white'
board.insertAdjacentElement('beforeend', square)
 }
}

function updateSizeText(size){
    gridValue.innerHTML = `${size} x ${size}`;}

    boardDivs(16) 
gridSlider.onchange = (e) => boardDivs(e.target.value);
gridSlider.onmousemove = (e) => updateSizeText(e.target.value);


function squareColor(){
    if ((color === "random")){
    this.style.backgroundColor =  `hsl(${Math.random() * 360}, 80%, 50%)`;
    }else{
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector('.board')
    let squares = board. querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white')
}


//knob
function calculateDegree(e){
    const x1 = window.innerWidth / 2;
    const y1 = window.innerHeight / 2;
    const x2 = e.clientX;
    const y2 = e.clientY;

    const deltaX = x1 - x2;
    const deltaY = y1 - y2;

    const rad = Math.atan2(deltaY, deltaX)

    let deg = rad * (180 / Math.PI);
    return deg
}

knob.addEventListener('mousedown', ()=>{
    knob.addEventListener("mousemove", rotate)
    function rotate(e) {
        const result = Math.floor(calculateDegree(e) - 90);
        knob.style.transform = `rotate(${result}deg)`;
    }
    knob.addEventListener('mouseup', function () {
        knob.removeEventListener( 'mousemove', rotate);
    });
});