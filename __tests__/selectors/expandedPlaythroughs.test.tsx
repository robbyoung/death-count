import { createTestState } from '../../app/state';
import { getAllPlaythroughsExpanded, getPlaythroughsForCurrentGameExpanded } from '../../app/selectors/expandedPlaythroughs';

describe('Expanded Playthrough Selectors', () => {
    describe('Get All Playthroughs Expanded', () => {
        it('Works with no playthroughs', () => {
            const state = createTestState(1, 0, 0, 0, 0);
            const result = getAllPlaythroughsExpanded(state);
            expect(result.length).toBe(0);
        });

        it('Can select and expand all playthroughs', () => {
            const state = createTestState(2, 5, 10, 0, 0);
            const result = getAllPlaythroughsExpanded(state);
            expect(result.length).toBe(5);
            result.forEach((playthrough, index) => {
                expect(playthrough.id).toBe(`p${index}`);
                expect(playthrough.gameName).toBe(`Game ${index % 2}`);
                expect(playthrough.deathCount).toBe(2);
            });
        });
    });

    describe('Get All Playthroughs For Current Game Expanded', () => {
        it('Works with no playthroughs', () => {
            const state = createTestState(1, 0, 0, 0, 0);
            const result = getPlaythroughsForCurrentGameExpanded(state);
            expect(result.length).toBe(0);
        });

        it('Can select and expand playthroughs for current game', () => {
            const state = createTestState(2, 5, 10, 1, 0);
            const result = getPlaythroughsForCurrentGameExpanded(state);
            expect(result.length).toBe(2);
            result.forEach((playthrough, index) => {
                expect(playthrough.id).toBe(`p${index * 2 + 1}`);
                expect(playthrough.gameName).toBe('Game 1');
                expect(playthrough.deathCount).toBe(2);
            });
        });
    });
});