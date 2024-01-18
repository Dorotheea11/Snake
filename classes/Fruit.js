import Square from "./Square";

export default class Fruit extends Square {
    constructor({row, col}, code) {
        super(row, col, code);
    }
}