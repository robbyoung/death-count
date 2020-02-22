import { createTestPlaythrough } from '../../app/state';
import playthroughsReducer from '../../app/reducers/playthroughs';
import { completePlaythroughAction } from '../../app/actions';

describe('Complete Playthrough Action', () => {
    it('can mark an incomplete playthrough as complete', () => {
        const playthrough = createTestPlaythrough(false);
        const action = completePlaythroughAction();
        const state = [playthrough];
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([createTestPlaythrough(true, playthrough.id)]);
        expect(state).toEqual([createTestPlaythrough(false, playthrough.id)]);
    });
});