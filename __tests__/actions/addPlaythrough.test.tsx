import { AddPlaythrough } from '../../app/actions';
import { Playthrough } from '../../app/state';
import playthroughsReducer from '../../app/reducers/playthroughs';

describe('Add Playthrough Action', () => {
    it('can add a playthrough to an empty list', () => {
        const newPlaythrough: Playthrough = {
            id: '123',
            name: 'test playthrough',
            gameId: '456',
        };
        const addDeathAction = new AddPlaythrough(newPlaythrough);
        const state = [];
        const newState = playthroughsReducer([], addDeathAction);
        expect(newState).toEqual([newPlaythrough]);
        expect(state).not.toEqual(newState);
    });
})