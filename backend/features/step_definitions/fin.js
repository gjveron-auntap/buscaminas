"use strict";

const { Given, When, Then } = require('cucumber');
const { expect } = require("chai");
const { Board } = require("../../srcbusiness/model/board")

Then('i lose the game', async function () {
    expect(this.game.isLose).to.be.true;
});