
import gamesReducer from '../../app/reducers/games';
import { Game } from '../../app/state';

describe('Games Reducer', () => {
    it('sets the initial state', () => {
        const action = { type: 'test type' };
        const newState = gamesReducer(undefined, action);
        expect(newState).toEqual([]);
    });

    it('will not change state for unknown actions', () => {
        const action = { type: 'test type' };
        const state: Game[] = [{id: '123', name: 'test', options: []}];
        const newState = gamesReducer(state, action);
        expect(newState).toEqual(state);
    });
});