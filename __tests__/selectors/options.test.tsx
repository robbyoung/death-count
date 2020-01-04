import { getOptionSetForNewDeath, getAllOptionSets, getOptionSetsForSelectedGame, getOptionSetsForIncompleteGame, getSelectedOptionSet } from '../../app/selectors';
import { createTestState } from '../../app/state';

describe('Option Selectors', () => {
    describe('Get All Option Sets', () => {
        it('Can select all option sets', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            const result = getAllOptionSets(state);
            expect(result.length).toBe(6);
            result.forEach((optionSet, index) => {
                expect(optionSet.id).toBe(`o${index}`);
            });
        });
    });
    
    describe('Get Option Sets For Selected Game', () => {
        it('Can select option sets for the selected game', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            const result = getOptionSetsForSelectedGame(state);
            expect(result.length).toBe(3);
            result.forEach((optionSet) => {
                expect(optionSet.gameId).toBe('g0');
            });
        });
    });
    
    describe('Get Option Sets For Incomplete Game', () => {
        it('Can select option sets for an incomplete game', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            state.games[1].complete = false;
            const result = getOptionSetsForIncompleteGame(state);
            expect(result.length).toBe(3);
            result.forEach((optionSet) => {
                expect(optionSet.gameId).toBe('g1');
            });
        });
    });
    
    describe('Get Option Set For New Death', () => {
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
    });

    describe('Get Selected Option Set', () => {
        it('Will return undefined if game has no option sets', () => {
            const state = createTestState(2, 5, 10, 1, 1);
            const death = state.deaths[1];
            death.complete = false;
            state.optionSets = [];
            
            const result = getOptionSetForNewDeath(state);
            expect(result).toBe(undefined);
        });
    
        it('Can get the user-selected option set', () => {
            const state = createTestState(2, 5, 10, 1, 1);
            state.optionSets[3].selected = true;
            
            const result = getSelectedOptionSet(state);
            expect(result).toBe(state.optionSets[3]);
        });
    
        it('Will return undefined if no option sets for the current game are selected', () => {
            const state = createTestState(2, 5, 10, 1, 1);
            state.optionSets[0].selected = true;
            
            const result = getSelectedOptionSet(state);
            expect(result).toBe(undefined);
        });
    });
});