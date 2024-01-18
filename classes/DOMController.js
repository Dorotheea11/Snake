export default class DOMController {
    gridElement;

    constructor() {
        this.gridElement = document.querySelector("#grid");
    }

    createPageGrid(grid) {
        grid.data.forEach((row, rowIndex)=> {
            let rowElement = document.createElement("div");
            rowElement.classList.add("row");
            row.forEach((cell, cellIndex) => {
                let cellElement = document.createElement("div");
                cellElement.classList.add("cell");
                cellElement.classList.add(`cell-${rowIndex}${cellIndex}`);
                rowElement.appendChild(cellElement);
            });
            this.gridElement.appendChild(rowElement);
        });     
    }
}