import { createSelector } from 'reselect'
import { State } from '../state'

const getGames = (state: State) => state.games;

export const getAllGames = createSelector(
    [getGames],
    (games) => {
        return games;
    }
)

export const getSelectedGame = createSelector(
    [getGames],
    (games) => {
        return games.find(game => game.selected);
    }
)