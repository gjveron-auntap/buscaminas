"use strict";

class Cell{
    constructor() { }
    
    init(id) {
        this.id = id || 0;
        this.isUncovered = false;
        this.isMine = Math.floor((Math.random() * 10) + 1) <= 2;
    }

    load(cellJson) {
        Object.assign(this, cellJson);
    }
}

module.exports = { Cell };