
import gamesReducer from '../../app/reducers/games';
import { Game, createTestState } from '../../app/state';

describe('Games Reducer', () => {
    it('sets the initial state', () => {
        const action = { type: 'test type' };
        const newState = gamesReducer(undefined, action);
        expect(newState).toEqual([]);
    });

    it('will not change state for unknown actions', () => {
        const action = { type: 'test type' };
        const state: Game[] = createTestState(1, 1, 0, 0, 0).games;
        const newState = gamesReducer(state, action);
        expect(newState).toEqual(state);
    });
});