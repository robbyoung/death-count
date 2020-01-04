import { getAllPlaythroughs, getPlaythroughsForCurrentGame, getSelectedPlaythrough } from '../../app/selectors';
import { createTestState } from '../../app/state';

describe('Playthrough Selectors', () => {
    describe('Get All Playthroughs', () => {
        it('Can select all playthroughs', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            const result = getAllPlaythroughs(state);
            expect(result.length).toBe(5);
            result.forEach((playthrough, index) => {
                expect(playthrough.id).toBe(`p${index}`);
            });
        });
    });

    describe('Get Playthroughs For Current Game', () => {
        it('Can select playthroughs for current game', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            const result = getPlaythroughsForCurrentGame(state);
            expect(result.length).toBe(3);
            result.forEach((playthrough, index) => {
                expect(playthrough.id).toBe(`p${index * 2}`);
            });
        });
    });

    describe('Get Selected Playthrough', () => {
        it('Can select the user-selected playthrough', () => {
            const state = createTestState(4, 5, 10, 0, 4);
            const result = getSelectedPlaythrough(state);
            expect(result.id).toBe('p4');
        });
    });
});