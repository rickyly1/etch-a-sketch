const GRID_CONTAINER = document.getElementById("grid-container")

function populateGrid(squareCount) {
    GRID_CONTAINER.innerHTML = "";

    // creates rows
    for (let i = 0; i < squareCount; i++) {
        const row = document.createElement('div');
        row.className = "grid-row";

        // populates rows (creates columns)
        for (let j = 0; j < squareCount; j++) {
            const rowNode = document.createElement('div');
            rowNode.className = "grid-node";

            let size = GRID_CONTAINER.offsetWidth / squareCount;
            rowNode.style.width = size + "px";
            rowNode.style.height = size + "px";

            rowNode.addEventListener('mouseenter', () => {
                rowNode.style.backgroundColor = 'black';
            })
            row.appendChild(rowNode);
        }

        GRID_CONTAINER.appendChild(row);
    }
}

function changeSize() {
    const newSize = prompt("Enter a new grid size in the range 1-100");

    if (newSize != null && !isNaN(newSize) && newSize > 0 && newSize <= 100) {
        populateGrid(Number(newSize));
        
    } else {
        alert("Not a valid number");
    }
}

function eraseBoard() {
    const gridNodes = document.querySelectorAll(".grid-node");

    gridNodes.forEach(node => {
        node.style.backgroundColor = 'white';
    })
}

populateGrid(16);