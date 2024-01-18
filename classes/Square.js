export default class Square {
    row;
    col;
    code;

    constructor(row, col, code) {
        this.row = row;
        this.col = col;
        this.code = code;
    }

    redraw(grid) {
        grid.data[this.row][this.col] = this.code;   
    }

    reset(grid) {
        let newCoord = grid.getRandomCoordinates();
        this.row = newCoord.row;
        this.col = newCoord.col;
    }
}