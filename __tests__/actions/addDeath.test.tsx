import deathsReducer from '../../app/reducers/deaths';
import {addDeathAction} from '../../app/actions/addDeath';

describe('Add Death Action', () => {
    it('can add a death to an empty list', () => {
        const playthroughId = '123';
        const action = addDeathAction(playthroughId);
        const state = [];
        const newState = deathsReducer([], action);
        expect(newState).toEqual([action.newDeath]);
        expect(state).not.toEqual(newState);
    });
})