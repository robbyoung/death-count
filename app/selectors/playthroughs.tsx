import { createSelector } from 'reselect'
import { State } from '../state'

const getPlaythroughs = (state: State) => state.playthroughs;
const getCurrentGame = (state: State) => state.currentGame;

export const getAllPlaythroughs = createSelector(
  [getPlaythroughs],
  (playthroughs) => {
    return playthroughs;
  }
)

export const getPlaythroughsForCurrentGame = createSelector(
  [getPlaythroughs, getCurrentGame],
  (playthroughs, gameId) => {
    return playthroughs.filter((playthrough) => playthrough.gameId === gameId);
  }
)