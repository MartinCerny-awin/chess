# Chess Game Simulation

Goal: Develop a simplified version of a chess game in TypeScript.

    - 2 players
    - Implement only the pawns for simplicity, including their basic movement rules:

## Basic Rules of simplified chess

    - Pawns can move forward one square, but the initial move can be two squares.
    - Pawns capture diagonally.
    - The board is an 8x8 grid, and pawns are placed on their respective rows (Player 1 on row 2, Player 2 on row 7).
    - Players take turns moving their pawns.
    - A pawn reaches the opposite end of the board is promoted to a queen (you do not need to implement queen movement, just declare that pawn as a queen).
    - The game ends when any one player's pawn is promoted to a queen. Return player x wins.
    - Implement basic collision detection where a pawn cannot move forward into an occupied square.

## Out of scope

    - Counting multiple games
    - Implementing other pieces and their movements.
    - Handling more complex chess rules like en passant, castling, or check/checkmate scenarios.
    - No graphical interface is required; the simulation should work via console commands or simple function calls.

## Available commands:

    - npm test (runs the `test.ts` file with jest)

## JavaScript option

    - to use JavaScript, change branch to `es5`
