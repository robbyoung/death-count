
import { createTestState, OptionSet } from '../../app/state';
import optionsReducer from '../../app/reducers/options';

describe('Options Reducer', () => {
    it('sets the initial state', () => {
        const action = { type: 'test type' };
        const newState = optionsReducer(undefined, action);
        expect(newState).toEqual([]);
    });

    it('will not change state for unknown actions', () => {
        const action = { type: 'test type' };
        const state: OptionSet[] = createTestState(1, 1, 0, 0, 0).optionSets;
        const newState = optionsReducer(state, action);
        expect(newState).toEqual(state);
    });
});