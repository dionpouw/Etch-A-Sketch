const container = document.querySelector("#container");

function createGrid(grid) {
    for (i = 0; i < grid; i++) {
        let createRow = document.createElement("div");
        createRow.classList.add('row');
        container.appendChild(createRow);
        for (j = 0; j < grid; j++) {
            let content = document.createElement("div");
            content.classList.add("box");
            createRow.appendChild(content);
        }
    }
}

createGrid(16);

const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    let newGrid = prompt("How many grid?");
    if (newGrid < 100) {
        removeGrid();
        createGrid(newGrid);
    } else {
        alert("Cannot be more than 100");
    }
})

function removeGrid() {
    const parent = document.getElementById("container");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}