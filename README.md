This example entry simply chooses the first available space in the input board state.

Input
---
`3 3 3 ___x_o___`

This input represents a board state where:

The board is:
 - *3* wide
 - *3* high
 - you need to get *3* in a row
 - "x" to go next

The current board looks like:
```
   │   │
───┼───┼───
 x │   │ o
───┼───┼───
   │   │
```
Output
---

Output in this case would be: ```0``` which transforms the board state to:
```
 x │   │
───┼───┼───
 x │   │ o
───┼───┼───
   │   │
```


