import game from './game';

describe('A tennis game', () => {
  it('should return initial score', () => {
    expect(game.getScore()).toEqual('0-0');
  });
});
