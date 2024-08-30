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