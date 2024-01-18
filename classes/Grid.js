export default class Grid {
    data;
    code;

    constructor(width, height, code) {
        this.data = getEmptyGrid(width, height, code);
        this.code = code;
    }

    getEmptyGrid(width, height, code) {
        let grid = [];
        for (let i = 0; i < height; i++) {
            let arr = [];
            for (let j = 0; j < width; j++) {
                arr.push(code);
            }
            grid.push(arr);
        }
        return grid;
    }

    getRandomCoordinates() {
        let randRowIndex;
        let randColumnIndex;
        do {
            randRowIndex = Math.floor(Math.random()*this.data.length);
            randColumnIndex = Math.floor(Math.random()*this.data[0].length);
        } while (this.data[randRowIndex][randColumnIndex] !== EMPTY_CODE);
        
        return {row: randRowIndex, col: randColumnIndex};
    } 

    clear() {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                this.data[i][j] = this.code;
            }
        }

    }
    redraw() {
        //to use HEAD_CODE 
    }

}