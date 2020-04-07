"use strict";

const { Game } = require("../../srcbusiness/model/game")

const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors());
const port = process.argv[2] || 3000;

app.options('*', cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/game/:width?/:height?', (req, res) => {
    let game = new Game();
    let width = req.params.width || 10;
    let height = req.params.height || 10;
    game.init(width, height);
    game.start();
    res.send({ game: game });
})

app.put('/game/uncoverCell/:cellId', (req, res) => {
    let cellId = +req.params.cellId;
    let game = new Game();

    game.load(req.body.game);    
    game.uncoverCell(cellId);

    res.send({ game });
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))