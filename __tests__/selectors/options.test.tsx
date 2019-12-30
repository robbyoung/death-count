import { getOptionSetForNewDeath, getAllOptionSets, getOptionSetsForSelectedGame, getOptionSetsForIncompleteGame } from '../../app/selectors';
import { createTestState } from '../../app/state';

describe('Option Selectors', () => {
    it('Can select all option sets', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        const result = getAllOptionSets(state);
        expect(result.length).toBe(6);
        result.forEach((optionSet, index) => {
            expect(optionSet.id).toBe(`o${index}`);
        });
    });

    it('Can select option sets for the selected game', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        const result = getOptionSetsForSelectedGame(state);
        expect(result.length).toBe(3);
        result.forEach((optionSet) => {
            expect(optionSet.gameId).toBe('g0');
        });
    });

    it('Can select option sets for an incomplete game', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        state.games[1].complete = false;
        const result = getOptionSetsForIncompleteGame(state);
        expect(result.length).toBe(3);
        result.forEach((optionSet) => {
            expect(optionSet.gameId).toBe('g1');
        });
    });

    it('Can select options for an incomplete death', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        const death = state.deaths[0];
        death.complete = false;
        
        const result = getOptionSetForNewDeath(state);
        expect(result).toEqual(state.optionSets[0])
    });

    it('Will return undefined for an almost-complete death', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        const death = state.deaths[0];
        death.complete = false;
        death.details['Option Set 0'] = 'Option 1';
        death.details['Option Set 1'] = 'Option 3';
        death.details['Option Set 2'] = 'Option 2';
        
        const result = getOptionSetForNewDeath(state);
        expect(result).toBe(undefined);
    });

    it('Will return undefined if game has no option sets', () => {
        const state = createTestState(2, 5, 10, 1, 1);
        const death = state.deaths[1];
        death.complete = false;
        state.optionSets = [];
        
        const result = getOptionSetForNewDeath(state);
        expect(result).toBe(undefined);
    });
});