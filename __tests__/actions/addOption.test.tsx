import { addOptionAction } from '../../app/actions';
import { createTestOptionSet } from '../../app/state';
import optionsReducer from '../../app/reducers/options';

describe('Add Option Action', () => {
    it('can add an option to an option set', () => {
        const optionSet = createTestOptionSet(1)
        const action = addOptionAction(optionSet.id, 'Option 1');
        const state = [optionSet];
        const newState = optionsReducer(state, action);
        expect(newState).toEqual([createTestOptionSet(2, optionSet.id)]);
        expect(state).toEqual([createTestOptionSet(1, optionSet.id)]);
    });
})