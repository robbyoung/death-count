import { createTestState } from '../../app/state';
import { getAllGames, getSelectedGame, getIncompleteGame } from '../../app/selectors';

describe('Game Selectors', () => {
    describe('Get All Games', () => {
        it('Can select all games', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            const result = getAllGames(state);
            expect(result.length).toBe(2);
            result.forEach((game, index) => {
                expect(game.id).toBe(`g${index}`);
            });
        });

        it('Will omit incomplete games', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            state.games[0].complete = false;
            const result = getAllGames(state);
            expect(result.length).toBe(1);
            expect(result[0].id).toBe(`g1`);
        });
    });
    
    describe('Get Selected Game', () => {
        it('Can select the user-selected game', () => {
            const state = createTestState(4, 5, 10, 2, 0);
            const result = getSelectedGame(state);
            expect(result.id).toBe('g2');
        });
    });
    
    describe('Get Incomplete Game', () => {
        it('Can select an incomplete game', () => {
            const state = createTestState(4, 5, 10, 2, 0);
            state.games[1].complete = false;
            const result = getIncompleteGame(state);
            expect(result.id).toBe('g1');
        });
    });
});