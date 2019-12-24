import deathsReducer from '../../app/reducers/deaths';
import { createTestDeath } from '../../app/state';
import { completeDeathAction } from '../../app/actions';

describe('Complete Death Action', () => {
    it('can mark an incomplete death as complete', () => {
        const death = createTestDeath(false);
        const action = completeDeathAction();
        const state = [death];
        const newState = deathsReducer(state, action);
        expect(newState).toEqual([createTestDeath(true, death.id)]);
        expect(state).toEqual([createTestDeath(false, death.id)]);
    });
});