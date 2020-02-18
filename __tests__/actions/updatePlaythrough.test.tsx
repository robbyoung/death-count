import { updatePlaythroughAction } from '../../app/actions';
import { createTestState, createTestPlaythrough } from '../../app/state';
import playthroughsReducer from '../../app/reducers/playthroughs';

describe('Update Playthrough Action', () => {
    it('will replace the incomplete playthrough', () => {
        const state = [...createTestState(2, 3, 5, 0, 0).playthroughs, createTestPlaythrough(false, 'orig')];
        const updated = {
            gameId: 'fake',
            name: 'test',
            id: 'testId',
            selected: true,
            complete: false,
        };
        const action = updatePlaythroughAction(updated);
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([...createTestState(2, 3, 5, 0, 0).playthroughs, updated]);
        expect(state).toEqual([...createTestState(2, 3, 5, 0, 0).playthroughs, createTestPlaythrough(false, 'orig')]);
    });
})