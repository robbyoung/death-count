import deathsReducer from '../../app/reducers/deaths';
import { createTestDeath, createTestState } from '../../app/state';
import { addDeathDetailAction } from '../../app/actions';

describe('Add Death Detail Action', () => {
    it('can add a detail to an incomplete death', () => {
        const death = createTestDeath(false);
        const action = addDeathDetailAction('k0', 'v0');
        const state = [death];
        const newState = deathsReducer(state, action);
        expect(newState).toEqual([createTestDeath(false, death.id, 1)]);
        expect(state).toEqual([createTestDeath(false, death.id)]);
    });

    it('will return the state unchanged if there are no incomplete deaths', () => {
        const state = createTestState(2, 2, 10, 0, 0).deaths;
        const action = addDeathDetailAction('k0', 'v0');
        const newState = deathsReducer(state, action);
        expect(newState).toEqual(createTestState(2, 2, 10, 0, 0).deaths);
    });
});