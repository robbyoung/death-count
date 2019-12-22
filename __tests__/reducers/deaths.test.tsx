
import deathsReducer from '../../app/reducers/deaths';
import { Death } from '../../app/state';

describe('Deaths Reducer', () => {
    it('sets the initial state', () => {
        const action = { type: 'test type' };
        const newState = deathsReducer(undefined, action);
        expect(newState).toEqual([]);
    });

    it('will not change state for unknown actions', () => {
        const action = { type: 'test type' };
        const state: Death[] = [{ id: '123', playthroughId: '456' }];
        const newState = deathsReducer(state, action);
        expect(newState).toEqual(state);
    });
});