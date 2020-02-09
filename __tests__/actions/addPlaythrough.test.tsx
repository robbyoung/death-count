import { addPlaythroughAction } from '../../app/actions';
import playthroughsReducer from '../../app/reducers/playthroughs';
import { createTestState, createTestPlaythrough } from '../../app/state';

describe('Add Playthrough Action', () => {
    it('can add a playthrough to an empty list', () => {
        const action = addPlaythroughAction();
        const state = [];
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([action.newPlaythrough]);
        expect(newState[0].complete).toBe(false);
        expect(newState[0].selected).toBe(false);
        expect(state).toEqual([]);
    });

    it('will put the new playthrough at the end of the list', () => {
        const state = createTestState(2, 2, 0, 1, 1).playthroughs;
        const action = addPlaythroughAction();
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([...createTestState(2, 2, 0, 1, 1).playthroughs, action.newPlaythrough]);
        expect(newState[2].selected).toBe(false);
        expect(newState[2].complete).toBe(false);
        expect(state).toEqual(createTestState(2, 2, 0, 1, 1).playthroughs);
    });

    it('will remove other incomplete playthroughs', () => {
        const state = [...createTestState(2, 2, 0, 1, 1).playthroughs, createTestPlaythrough(false, 'incomplete')];
        const action = addPlaythroughAction();
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([...createTestState(2, 2, 0, 1, 1).playthroughs, action.newPlaythrough]);
        expect(newState[2].selected).toBe(false);
        expect(newState[2].complete).toBe(false);
        expect(state).toEqual([...createTestState(2, 2, 0, 1, 1).playthroughs, createTestPlaythrough(false, 'incomplete')]);
    });

    it('can take an id as an optional parameter', () => {
        const state = [...createTestState(2, 2, 0, 1, 1).playthroughs];
        const id = 'test id';
        const action = addPlaythroughAction(id);
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([...createTestState(2, 2, 0, 1, 1).playthroughs, action.newPlaythrough]);
        expect(newState[2].id).toBe(id);
        expect(state).toEqual([...createTestState(2, 2, 0, 1, 1).playthroughs]);
    });
})