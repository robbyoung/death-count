import { createSelector } from 'reselect';
import { getSelectedOptionSet } from './options';
import { getDeathsForCurrentPlaythrough } from './deaths';

export const getDeathStatsForPlaythrough = createSelector(
    [getDeathsForCurrentPlaythrough, getSelectedOptionSet],
    (deaths, optionSet) => {
        if (deaths.length === 0 || optionSet === undefined) {
            return undefined;
        }

        return optionSet.options.map(option => {
            const count = deaths.filter(death => death.details[optionSet.title] === option).length;
            const percentage = Math.round(count / deaths.length * 10000) / 100;
            return {
                name: option,
                count,
                percentage,
            }
        });
    }
)