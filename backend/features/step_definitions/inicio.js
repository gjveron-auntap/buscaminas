"use strict";

const { Given, When, Then } = require('cucumber');
const { expect } = require("chai");
const { Game } = require ("../../srcbusiness/model/game")

Given(/^i have a new game$/, async function () {
  let game = this.game = new Game();
  game.init(5, 5);
  return;
});

When(/^i look at the uncovered board for mines$/, async function () {
  this.game.uncoverAllCells();
});

Then(/^there is at least one mine$/, async function () {
  let allCells = this.game.board.getAllCells();
  let bombCells = allCells.filter(x => x.isMine);
  expect(bombCells.length).to.gte(1)
});