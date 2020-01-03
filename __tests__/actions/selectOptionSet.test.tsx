import { selectOptionSetAction } from '../../app/actions';
import optionsReducer from '../../app/reducers/options';
import { createTestState } from '../../app/state';

describe('Select Option Set Action', () => {
    it('can select an option set while none are selected', () => {
        const state = createTestState(2, 5, 10, 1, 1).optionSets;
        const action = selectOptionSetAction(state[2].id);
        const newState = optionsReducer(state, action);
        expect(newState).toEqual(createTestState(2, 5, 10, 1, 1, 2).optionSets);
        expect(state).toEqual(createTestState(2, 5, 10, 1, 1).optionSets);
    });

    it('can change which option set is selected', () => {
        const state = createTestState(2, 5, 10, 1, 1, 2).optionSets;
        const action = selectOptionSetAction(state[3].id);
        const newState = optionsReducer(state, action);
        expect(newState).toEqual(createTestState(2, 5, 10, 1, 1, 3).optionSets);
        expect(state).toEqual(createTestState(2, 5, 10, 1, 1, 2).optionSets);
    });

    it('can deselect all option sets', () => {
        const state = createTestState(2, 5, 10, 1, 1, 2).optionSets;
        const action = selectOptionSetAction(undefined);
        const newState = optionsReducer(state, action);
        expect(newState).toEqual(createTestState(2, 5, 10, 1, 1).optionSets);
        expect(state).toEqual(createTestState(2, 5, 10, 1, 1, 2).optionSets);
    });
});