const game = require('./game');

describe('A simplified chess game', () => {
  it('should set up pawns on their initial positions correctly', () => {
    const board = game.getBoard();

    expect(board[1][0]).toEqual({ type: 'Pawn', player: 1 });
    expect(board[6][0]).toEqual({ type: 'Pawn', player: 2 });
  });
});
