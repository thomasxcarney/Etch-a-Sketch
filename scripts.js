const gridContainer = document.querySelector('.grid-container');
function createGrid(num){
    for(let i=0; i<(num*num); i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
        square.style.setProperty('height', 'calc(800 / num)');
        square.style.setProperty('width', 'calc(800 / num)');
    }
}

createGrid(16);


function addHover(target){
    target.classList.add('hover');
};

const squares = document.getElementsByClassName('grid-square');

for(let i=0; i<squares.length; i++) {
    let currentSquare = squares[i];
    currentSquare.addEventListener("mouseover", function() {
        addHover(currentSquare);
    });
}

document.querySelector("#grid-button").addEventListener('click', gridPrompt);

function gridPrompt(){
    let playerPrompt = prompt("Enter grid size");
    let num = (playerPrompt);
    createNewGrid(num);
}

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
    };
}