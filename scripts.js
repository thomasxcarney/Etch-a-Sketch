function createGrid(){
    const gridContainer = document.querySelector('.grid-container');
    for(let i=0; i<256; i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    }
}

createGrid();