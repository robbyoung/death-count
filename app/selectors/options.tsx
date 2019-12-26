import { createSelector } from 'reselect';
import { getIncompleteDeath } from './deaths';
import { getSelectedGame } from './games';
import { State } from '../state';

export const getAllOptionSets = (state: State) => state.optionSets;

export const getOptionSetsForSelectedGame = createSelector(
    [getAllOptionSets, getSelectedGame],
    (optionSets, game) => {
        return optionSets.filter((optionSet => optionSet.gameId === game.id));
    }
)

export const getOptionSetForNewDeath = createSelector(
    [getIncompleteDeath, getOptionSetsForSelectedGame],
    (death, optionSets) => {
        return optionSets.find((options => death.details[options.title] === undefined));
    }
)
