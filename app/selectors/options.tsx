import { createSelector } from 'reselect';
import { getIncompleteDeath } from './deaths';
import { getSelectedGame } from './games';

export const getOptionsForNewDeath = createSelector(
    [getIncompleteDeath, getSelectedGame],
    (death, game) => {
        const optionSets = game.options;
        return optionSets.find((options => death.details[options.title] === undefined));
    }
)
