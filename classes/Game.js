import Grid from "./Grid";
import Head from "./Head";
import Fruit from "./Fruit";
import Body from "./Body";


export default class Game {
    grid;
    head;
    fruit;
    body;
    
    isOver;
    directionX;
    directionY;


    constructor() {  
        this.grid = new Grid(WIDTH, HEIGHT, EMPTY_CODE);
        this.head = new Head(this.grid.getRandomCoordinates(), HEAD_CODE);
        this.fruit = new Fruit(this.grid.getRandomCoordinates(), FRUIT_CODE);
        this.body = new Body();

        this.isOver = false;
        this.directionX = 0;
        this.directionY = 0;
    }

    restart() {
        this.grid.clear();
        this.body = [];
        this.head.reset(this.grid);
        this.directionX = 0;
        this.directionY = 0;
        // fruitEaten = false;
        // isGameOver = false;

        // print(grid);
        // document.querySelector('.game-status').textContent = '';
        // document.querySelector('.replay-button').style.display = 'none';

        // timerId = setInterval(loop, FRAME_RATE);
    }

    loop() {
        if (!this.isOver) {
            this.grid.clear();
            moveSnake();
            this.redraw();
            print(grid);
        }
    }
}