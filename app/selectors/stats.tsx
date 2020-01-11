import { createSelector } from 'reselect';
import { getSelectedOptionSet } from './options';
import { getDeathsForCurrentPlaythrough } from './deaths';

export const getDeathStatsForPlaythrough = createSelector(
    [getDeathsForCurrentPlaythrough, getSelectedOptionSet],
    (deaths, optionSet) => {
        if (deaths.length === 0 || optionSet === undefined) {
            return undefined;
        }

        const deathStats = optionSet.options.map(option => {
            const count = deaths.filter(
                death => death.details[optionSet.title] === option,
            ).length;
            const percentage =
                Math.round((count / deaths.length) * 10000) / 100;
            return {
                name: option,
                count,
                percentage,
            };
        });

        return deathStats.sort((one, two) => two.count - one.count);
    },
);
