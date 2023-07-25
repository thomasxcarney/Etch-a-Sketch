const gridContainer = document.querySelector('.grid-container');

function createGrid(num){
    for(let i=0; i<(num*num); i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
        const dimensions = calculate(num);
        square.style.height = dimensions;
        square.style.width = dimensions;
    };
}
const squares = document.getElementsByClassName('grid-square');

createGrid(16);
addHoverClass();

function calculate(num){
    return (800 / num) + 'px';
};

function addHover(target){
    target.classList.add('hover');
};

let clicked = false;

document.querySelector("#randomize-colors").addEventListener('click', function() {
    clicked = true;
});
function addHoverClass(){
    for(let i=0; i<squares.length; i++) {
        let currentSquare = squares[i];
        currentSquare.addEventListener("mouseover", function() {
            if(clicked){
            currentSquare.style.backgroundColor = getRandomColor();
            } else addHover(currentSquare);
        });
    };
};

document.querySelector("#grid-button").addEventListener('click', gridPrompt);

function gridPrompt(){
    let playerPrompt = prompt("Enter grid size");
    let num = (playerPrompt);
    createNewGrid(num);
};

function createNewGrid(num){
    if(num > 100){
        alert("That's too big!");
    } else if(isNaN(num)) {
        alert("Error");
    } else {
        while(gridContainer.firstChild){
            gridContainer.removeChild(gridContainer.firstChild);
        };
        createGrid(num);
        addHoverClass();
    };
};

const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const color = "#" + randomColor;
    return color;
  }