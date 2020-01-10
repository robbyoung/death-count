import { getDeathStatsForPlaythrough } from '../../app/selectors';
import { createTestState } from '../../app/state';

describe('Stats Selectors', () => {
    describe('Get Death Stats For Playthrough', () => {
        it('Can select stats for the sole playthrough', () => {
            const state = createTestState(1, 1, 12, 0, 0, 0);
            const result = getDeathStatsForPlaythrough(state);
            expect(result).toEqual([
                {
                    name: 'Option 1',
                    count: 4,
                    percentage: 33.33,
                },
                {
                    name: 'Option 2',
                    count: 4,
                    percentage: 33.33,
                },
                {
                    name: 'Option 3',
                    count: 4,
                    percentage: 33.33,
                },
            ])
        });

        it('Will return undefined if no option set is selected', () => {
            const state = createTestState(1, 1, 12, 0, 0);
            const result = getDeathStatsForPlaythrough(state);
            expect(result).toBeUndefined();
        });

        it('Will return undefined if there are no deaths for the playthrough', () => {
            const state = createTestState(1, 2, 1, 0, 1, 0);
            const result = getDeathStatsForPlaythrough(state);
            expect(result).toBeUndefined();
        });

        it('Will order the death stats by frequency', () => {
            const state = createTestState(1, 1, 12, 0, 0, 0);
            state.deaths[9].details['Option Set 0'] = 'Option 3';
            state.deaths[10].details['Option Set 0'] = 'Option 3';

            const result = getDeathStatsForPlaythrough(state);
            expect(result).toEqual([
                {
                    name: 'Option 3',
                    count: 6,
                    percentage: 50,
                },
                {
                    name: 'Option 1',
                    count: 3,
                    percentage: 25,
                },
                {
                    name: 'Option 2',
                    count: 3,
                    percentage: 25,
                },
            ])
        });
    });
});