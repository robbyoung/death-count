import { createSelector } from 'reselect'
import { State } from '../state'
import { getSelectedGame } from './games';

export const getAllPlaythroughs = (state: State) => state.playthroughs;

export const getPlaythroughsForCurrentGame = createSelector(
  [getAllPlaythroughs, getSelectedGame],
  (playthroughs, selectedGame) => {
    return playthroughs.filter((playthrough) => playthrough.gameId === selectedGame.id);
  }
)

// export const getSelectedPlaythrough = createSelector(
//   [getAllPlaythroughs],
//   (playthroughs) => {
//       return playthroughs.find(playthrough => playthrough.selected);
//   }
// )

export const getSelectedPlaythrough = createSelector(
  [getPlaythroughsForCurrentGame],
  (playthroughs) => {
    return playthroughs[0];
  }
)