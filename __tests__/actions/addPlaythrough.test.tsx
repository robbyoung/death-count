import { addPlaythroughAction } from '../../app/actions';
import playthroughsReducer from '../../app/reducers/playthroughs';
import { createTestState } from '../../app/state';

describe('Add Playthrough Action', () => {
    it('can add a playthrough to an empty list', () => {
        const action = addPlaythroughAction('test', '123');
        const state = [];
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([action.newPlaythrough]);
        expect(state).toEqual([]);
    });

    it('will mark the new playthrough as selected', () => {
        const action = addPlaythroughAction('test action', 'test id');
        const state = createTestState(2, 2, 0, 1, 1).playthroughs;
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([...createTestState(2, 2, 0, 1, -1).playthroughs, action.newPlaythrough]);
        expect(newState[2].selected).toBe(true);
        expect(state).toEqual(createTestState(2, 2, 0, 1, 1).playthroughs);
    });
})