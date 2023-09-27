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
            rowNode.className = 'grid-node';
            row.appendChild(rowNode);
        }

        GRID_CONTAINER.appendChild(row);
    }
}

populateGrid(16);