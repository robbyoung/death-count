import { getAllPlaythroughs, getPlaythroughsForCurrentGame } from '../../app/selectors';
import { createTestState } from '../../app/state';

describe('Playthrough Selectors', () => {
    it('Can select all playthroughs', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        const result = getAllPlaythroughs(state);
        expect(result.length).toBe(5);
        result.forEach((playthrough, index) => {
            expect(playthrough.id).toBe(`p${index}`);
        });
    });

    it('Can select playthroughs for current game', () => {
        const state = createTestState(2, 5, 10, 0, 0);
        const result = getPlaythroughsForCurrentGame(state);
        expect(result.length).toBe(3);
        result.forEach((playthrough, index) => {
            expect(playthrough.id).toBe(`p${index * 2}`);
        });
    });
});