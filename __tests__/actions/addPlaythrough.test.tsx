import { addPlaythroughAction } from '../../app/actions';
import playthroughsReducer from '../../app/reducers/playthroughs';

describe('Add Playthrough Action', () => {
    it('can add a playthrough to an empty list', () => {
        const action = addPlaythroughAction('test', '123');
        const state = [];
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual([action.newPlaythrough]);
        expect(state).toEqual([]);
    });
})