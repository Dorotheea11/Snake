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

    addAllEventListeners(game) {
        document.body.addEventListener("keydown", (event) => {
            if (event.key === "ArrowDown" && game.directionY !== -1) { 
                game.directionX = 0;
                game.directionY = 1;
            } else if (event.key === "ArrowUp" && game.directionY !== 1) {
                game.directionX = 0;
                game.directionY = -1;
            } else if (event.key === "ArrowLeft" && game.directionX !== 1) {
                game.directionY = 0;
                game.directionX = -1;
            } else if (event.key === "ArrowRight" && game.directionX !== -1) {
                game.directionY = 0;
                game.directionX = 1;
            }
        }); 
        
        document.querySelectorAll("button").forEach(buttonElement => {
            buttonElement.addEventListener("click", event => {
                if (event.target.classList.contains("down") && game.directionY !== -1) { 
                    game.directionX = 0;
                    game.directionY = 1;
                } else if (event.target.classList.contains("up") && game.directionY !== 1) {
                    game.directionX = 0;
                    game.directionY = -1;
                } else if (event.target.classList.contains("left") && game.directionX !== 1) {
                    game.directionY = 0;
                    game.directionX = -1;
                } else if (event.target.classList.contains("right") && game.directionX !== -1) {
                    game.directionY = 0;
                    game.directionX = 1;
                }
            })
        });

        document.querySelector('.replay-button').addEventListener('click', () => {
            game.restart();
        });
    }

    clear() {
        this.gridElement.querySelectorAll(".row").forEach(row => {
            row.querySelectorAll(".cell").forEach(cell => {
                cell.classList.remove("head");
                cell.classList.remove("fruit");
                cell.classList.remove("body");
            });
        });
    }
}