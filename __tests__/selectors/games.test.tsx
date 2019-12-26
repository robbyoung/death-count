import { createTestState } from '../../app/state';
import { getAllGames, getSelectedGame } from '../../app/selectors';

describe('Game Selectors', () => {
    it('Can select all games', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        const result = getAllGames(state);
        expect(result.length).toBe(2);
        result.forEach((game, index) => {
            expect(game.id).toBe(`g${index}`);
        });
    });

    it('Can select the user-selected game', () => {
        const state = createTestState(4, 5, 10, 2, 0);
        const result = getSelectedGame(state);
        expect(result.id).toBe('g2');
    });
});