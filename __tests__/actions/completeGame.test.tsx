import { createTestGame } from '../../app/state';
import { completeGameAction } from '../../app/actions';
import gamesReducer from '../../app/reducers/games';

describe('Complete Game Action', () => {
    it('can mark an incomplete game as complete', () => {
        const game = createTestGame(false);
        const action = completeGameAction();
        const state = [game];
        const newState = gamesReducer(state, action);
        expect(newState).toEqual([createTestGame(true, game.id)]);
        expect(state).toEqual([createTestGame(false, game.id)]);
    });
});