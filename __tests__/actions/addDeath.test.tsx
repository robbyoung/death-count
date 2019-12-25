import deathsReducer from '../../app/reducers/deaths';
import { addDeathAction } from '../../app/actions';
import { createTestDeath } from '../../app/state';

describe('Add Death Action', () => {
    it('can add a death to an empty list', () => {
        const playthroughId = '123';
        const action = addDeathAction(playthroughId);
        const state = [];
        const newState = deathsReducer(state, action);
        expect(newState).toEqual([action.newDeath]);
        expect(state).toEqual([]);
    });

    it('put deaths at the end of the list', () => {
        const death1 = createTestDeath(true);
        const death2 = createTestDeath(true);
        const action = addDeathAction('123');
        const state = [death1, death2];
        const newState = deathsReducer(state, action);
        expect(newState).toEqual([death1, death2, action.newDeath]);
        expect(state).toEqual([createTestDeath(true, death1.id), createTestDeath(true, death2.id)]);
    });

    it('will remove other incomplete deaths', () => {
        const complete = createTestDeath(true);
        const incomplete = createTestDeath(false);
        const action = addDeathAction('123');
        const state = [complete, incomplete];
        const newState = deathsReducer(state, action);
        expect(newState).toEqual([complete, action.newDeath]);
        expect(state).toEqual([createTestDeath(true, complete.id), createTestDeath(false, incomplete.id)]);
    });
});