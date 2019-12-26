import { createSelector } from 'reselect'
import { State } from '../state'

export const getAllGames = (state: State) => state.games;

export const getSelectedGame = createSelector(
    [getAllGames],
    (games) => {
        return games.find(game => game.selected);
    }
)