
import deathsReducer from '../../app/reducers/deaths';
import { Death, createTestDeath } from '../../app/state';

describe('Deaths Reducer', () => {
    it('sets the initial state', () => {
        const action = { type: 'test type' };
        const newState = deathsReducer(undefined, action);
        expect(newState).toEqual([]);
    });

    it('will not change state for unknown actions', () => {
        const action = { type: 'test type' };
        const state: Death[] = [createTestDeath(true, '123')];
        const newState = deathsReducer(state, action);
        expect(newState).toEqual([createTestDeath(true, '123')]);
    });
});