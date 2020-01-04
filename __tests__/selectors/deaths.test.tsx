import { getAllDeaths, getDeathsForCurrentGame, getDeathsForCurrentPlaythrough } from '../../app/selectors';
import { createTestState } from '../../app/state';

describe('Death Selectors', () => {
    describe('Get All Deaths', () => {
        it('Can select all deaths', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            const result = getAllDeaths(state);
            expect(result.length).toBe(10);
            result.forEach((death, index) => {
                expect(death.id).toBe(`d${index}`);
            });
        });
    });
    
    describe('Get Deaths For Current Playthrough', () => {
        it('Can select deaths for current playthrough', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            const result = getDeathsForCurrentPlaythrough(state);
            expect(result.length).toBe(2);
            result.forEach((death, index) => {
                expect(death.id).toBe(`d${index * 5}`);
            });
        });
    });
    
    describe('Get Deaths For Current Game', () => {
        it('Can select deaths for current game', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            const result = getDeathsForCurrentGame(state);
            expect(result.length).toBe(6);
            const expectedIds = ['d0', 'd2', 'd4', 'd5', 'd7', 'd9'];
            result.forEach((death, index) => {
                expect(death.id).toBe(expectedIds[index]);
            });
        });
    });
});