"use strict";

const { Given, When, Then } = require('cucumber');
const { expect } = require("chai");
const { Board } = require("../../srcbusiness/model/board")

Given('i have a covered cell', async function () {
    let cells = this.game.board.getAllCells();
    let cell = cells[0];
    
    expect(cell.isUncovered).to.eql(false);
    this.cell = cell;
});

When('i click on a covered cell', async function () {
    this.game.uncoverCell(this.cell);
});

Then('the cell is uncovered', async function () {
    expect(this.cell.isUncovered).to.eql(true);
});

When('i look at the board', async function () {
    this.allCells = this.game.board.getAllCells();
});

Then('there is a covered cell', function () {
    let coveredCellExists = false;
    for (let i in this.allCells) {
        let cell = this.allCells[i];
        if (!cell.isUncovered) {
            coveredCellExists = !cell.isUncovered;
        }
    }
    expect(coveredCellExists).to.eql(true);
});

When('i uncover a mine', async function () {
    let cells = this.game.board.getAllCells();
    let cell = null;
    for (let i in cells) {
        let icell = cells[i];
        if (icell.isMine) {
            cell = icell;
            break;
        }
    }
    
    expect(cell.isUncovered).to.eql(false);
    this.game.uncoverCell(cell);
});