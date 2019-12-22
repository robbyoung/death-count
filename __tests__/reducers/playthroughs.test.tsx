
import playthroughsReducer from '../../app/reducers/playthroughs';
import { Playthrough } from '../../app/state';

describe('Playthroughs Reducer', () => {
    it('sets the initial state', () => {
        const action = { type: 'test type' };
        const newState = playthroughsReducer(undefined, action);
        expect(newState).toEqual([]);
    });

    it('will not change state for unknown actions', () => {
        const action = { type: 'test type' };
        const state: Playthrough[] = [{gameId: '456', id: '123', name: 'test'}];
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual(state);
    });
});