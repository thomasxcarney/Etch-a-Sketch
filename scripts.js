function createGrid(){
    const gridContainer = document.querySelector('.grid-container');
    for(let i=0; i<256; i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    }
}

createGrid();


function addHover(target){
    target.classList.add('hover');
};

const squares = document.getElementsByClassName('grid-square');
console.log(squares);
for(let i=0; i<squares.length; i++) {
    let currentSquare = squares[i];
    currentSquare.addEventListener("mouseover", function() {
        addHover(currentSquare);
    });
}

document.querySelector("#grid-button").addEventListener('click', gridPrompt);

function gridPrompt(){
    let playerPrompt = prompt("Enter grid size", " ");
    alert(playerPrompt);
}

function createNewGrid(num){
    
}