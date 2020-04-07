Feature: In its original form, mines are scattered throughout a board

Scenario: The board has mines
Given i have a new game
When i look at the uncovered board for mines
Then there is at least one mine
