import deathsReducer from '../../app/reducers/deaths';
import { createTestDeath } from '../../app/state';
import { addDeathDetailAction } from '../../app/actions/addDeathDetail';

describe('Add Death Detail Action', () => {
    it('can add a detail to an incomplete death', () => {
        const death = createTestDeath(false);
        const action = addDeathDetailAction('k0', 'v0');
        const state = [death];
        const newState = deathsReducer(state, action);
        expect(newState).toEqual([createTestDeath(false, death.id, 1)]);
        expect(state).toEqual([createTestDeath(false, death.id)]);
    });
});