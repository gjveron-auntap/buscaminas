Feature: When a cell is uncovered by a player click, and if it bears a mine, the game ends. 

Scenario: The game ends if you uncover a mine
Given i have a new game
When i uncover a mine
Then i lose the game