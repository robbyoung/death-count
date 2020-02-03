import { addPlaythroughAction } from '../../app/actions';
import playthroughsReducer from '../../app/reducers/playthroughs';
import { createTestState } from '../../app/state';

describe('Add Playthrough Action', () => {
    it('can add a playthrough to an empty list', () => {
        const action = addPlaythroughAction('test', '123');
        const state = [];
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([action.newPlaythrough]);
        expect(newState[0].complete).toBe(false);
        expect(newState[0].selected).toBe(false);
        expect(state).toEqual([]);
    });

    it('will put the new playthrough at the end of the list', () => {
        const state = createTestState(2, 2, 0, 1, 1).playthroughs;
        const action = addPlaythroughAction('test id', state[1].gameId);
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([...createTestState(2, 2, 0, 1, 1).playthroughs, action.newPlaythrough]);
        expect(newState[2].selected).toBe(false);
        expect(newState[2].complete).toBe(false);
        expect(state).toEqual(createTestState(2, 2, 0, 1, 1).playthroughs);
    });
})