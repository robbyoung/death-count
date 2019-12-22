
import playthroughsReducer from '../../app/reducers/playthroughs';
import { Playthrough, createTestState } from '../../app/state';

describe('Playthroughs Reducer', () => {
    it('sets the initial state', () => {
        const action = { type: 'test type' };
        const newState = playthroughsReducer(undefined, action);
        expect(newState).toEqual([]);
    });

    it('will not change state for unknown actions', () => {
        const action = { type: 'test type' };
        const state: Playthrough[] = createTestState(1, 1, 0, 0, 0).playthroughs;
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual(state);
    });
});