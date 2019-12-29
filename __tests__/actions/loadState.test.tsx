import reducer from '../../app/reducers';
import { createTestState } from '../../app/state';
import { loadStateAction } from '../../app/actions/setState';

describe('Load State Action', () => {
    it('can set the state to a specified value', () => {
        const action = loadStateAction(createTestState(2, 2, 10, 1, 1));
        const state = createTestState(1, 1, 0, 0, 0);
        const newState = reducer(state, action);
        expect(newState).toEqual(createTestState(2, 2, 10, 1, 1));
        expect(state).toEqual(createTestState(1, 1, 0, 0, 0));
    });
});