import { createSelector } from 'reselect'
import { State } from '../state'
import { getSelectedGame } from './games';
import { getSelectedPlaythrough, getAllPlaythroughs } from './playthroughs';

export const getAllDeaths = (state: State) => state.deaths.filter((death) => death.complete);

export const getIncompleteDeath = (state: State) => state.deaths.find((death) => !death.complete);

export const getDeathsForCurrentPlaythrough = createSelector(
    [getAllDeaths, getSelectedPlaythrough],
    (deaths, selectedPlaythrough) => {
        return deaths.filter((death) => death.playthroughId == selectedPlaythrough.id)
    }
)

export const getDeathsForCurrentGame = createSelector(
    [getAllDeaths, getAllPlaythroughs, getSelectedGame],
    (deaths, playthroughs, selectedGame) => {
        const playthroughsForGame = playthroughs.filter((playthrough) => playthrough.gameId === selectedGame.id);
        return deaths.filter((death) => playthroughsForGame.some((playthrough) => playthrough.id === death.playthroughId));
    }
)