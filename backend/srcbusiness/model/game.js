"use strict";

const { Board } = require ("../../srcbusiness/model/board")

class Game {
    constructor() { 
        this.running = false;
        this.isWin = false;
        this.isLose = false;
        this.gameTimeStart = Date.now();
        this.gameTimeEnd = Date.now();
    }
    
    init(width, height) {        
        this.board = new Board();
        this.board.init(width, height);
    }

    load(gameJson) {
        Object.assign(this, gameJson);
        
        this.board = new Board();
        this.board.load(gameJson.board)
    }

    start() {
        this.gameTimeStart = Date.now();
        this.running = true;
    }

    win() {
        this.gameTimeEnd = Date.now();
        this.running = false;
        this.isWin = true;
    }
    
    lose() {
        this.gameTimeEnd = Date.now();
        this.running = false;
        this.isLose = true;
    }

    uncoverCell(cell) {
        if (typeof cell === 'number') {
            cell = this.board.getCell(cell);
        }
        
        cell.isUncovered = true;
        if (cell.isMine) {
            this.lose();
        }
    }
    
    uncoverAllCells() {
        for (let i in this.cells) {
            let cell = this.cells[i];
            this.uncoverCell(cell);
        }
    }
}

module.exports = { Game };