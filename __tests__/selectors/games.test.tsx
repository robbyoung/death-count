import { createTestState } from '../../app/state';
import { getAllGames } from '../../app/selectors';

describe('Game Selectors', () => {
    it('Can select all games', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        const result = getAllGames(state);
        expect(result.length).toBe(2);
        result.forEach((playthrough, index) => {
            expect(playthrough.id).toBe(`g${index}`);
        });
    });
});