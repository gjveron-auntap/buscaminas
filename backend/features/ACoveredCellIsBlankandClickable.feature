Feature: A covered cell is blank and clickable

Scenario: We have a covered cell
Given i have a new game
When i look at the board
Then there is a covered cell

Scenario: A covered cell is clickable
Given i have a new game
And i have a covered cell
When i click on a covered cell
Then the cell is uncovered