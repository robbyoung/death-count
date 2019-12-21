import { AddDeath } from '../../app/actions';
import deathsReducer from '../../app/reducers/deaths';
import { Death } from '../../app/state';

describe('Add Death Action', () => {
    it('can add a death to an empty list', () => {
        const newDeath: Death = {
            id: '123',
            playthroughId: '456'
        };
        const addDeathAction = new AddDeath(newDeath);
        const state = [];
        const newState = deathsReducer([], addDeathAction);
        expect(newState).toEqual([newDeath]);
        expect(state).not.toEqual(newState);
    });
})