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
                    percentage: 0.33,
                },
                {
                    name: 'Option 2',
                    count: 4,
                    percentage: 0.33,
                },
                {
                    name: 'Option 3',
                    count: 4,
                    percentage: 0.33,
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
    });
});