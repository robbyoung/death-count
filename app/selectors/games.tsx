import { createSelector } from 'reselect'
import { State } from '../state'

const getGames = (state: State) => state.games;

export const getAllGames = createSelector(
    [getGames],
    (games) => {
        return games;
    }
)