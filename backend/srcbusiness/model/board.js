"use strict";

const { Cell } = require("../../srcbusiness/model/cell")

class Board {
    constructor() { }

    init(width, height) {
        this.width = width;
        this.height = height;
        this.cells = new Array(width * height);

        for (let i = 0; i < this.cells.length; i++) {
            let cell = this.cells[i] = new Cell();
            cell.init(i);
        }
    }

    load(boardJson) {
        Object.assign(this, boardJson);
        for (let i = 0; i < boardJson.cells.length; i++) {
            let cell = new Cell();
            cell.load(boardJson.cells[i]);
            this.cells[i] = cell;
        }
    }

    getAllCells() {
        return this.cells;
    }

    getCell(id) {
        return this.cells[id];
    }
}

module.exports = { Board };