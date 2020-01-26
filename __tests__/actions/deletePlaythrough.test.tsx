import { DeletePlaythroughAction } from '../../app/actions';
import playthroughsReducer from '../../app/reducers/playthroughs';
import { createTestState } from '../../app/state';

describe('Delete Playthrough Action', () => {
    it('can handle an invalid playthrough id', () => {
        const state = createTestState(2, 3, 2, 0, 0).playthroughs;
        const action = DeletePlaythroughAction('invalid');
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual(createTestState(2, 3, 2, 0, 0).playthroughs);
    });

    it('can delete a playthrough from the list', () => {
        const state = createTestState(2, 3, 2, 0, 0).playthroughs;
        const action = DeletePlaythroughAction(state[1].id);
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([state[0], state[2]]);
        expect(state).toEqual(createTestState(2, 3, 2, 0, 0).playthroughs);
    });
})