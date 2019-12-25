import { getOptionsForNewDeath } from '../../app/selectors';
import { createTestState } from '../../app/state';

describe('Option Selectors', () => {
    it('Can select options for an incomplete death', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        const death = state.deaths[0];
        death.complete = false;
        
        const result = getOptionsForNewDeath(state);
        expect(result).toEqual(state.games[0].options[0])
    });

    it('Will return undefined for an almost-complete death', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        const death = state.deaths[0];
        death.complete = false;
        death.details['Option Set 0'] = 'Option 1';
        death.details['Option Set 1'] = 'Option 3';
        death.details['Option Set 2'] = 'Option 2';
        
        const result = getOptionsForNewDeath(state);
        expect(result).toBe(undefined);
    });

    it('Will return undefined if game has no option sets', () => {
        const state = createTestState(2, 5, 10, 1, 1);
        const death = state.deaths[1];
        death.complete = false;
        const game = state.games[1];
        game.options = [];
        
        const result = getOptionsForNewDeath(state);
        expect(result).toBe(undefined);
    });
});