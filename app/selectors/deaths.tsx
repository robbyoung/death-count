import { createSelector } from 'reselect'
import { State } from '../state'

const getDeaths = (state: State) => state.deaths;
const getPlaythroughs = (state: State) => state.playthroughs;
const getCurrentPlaythrough = (state: State) => state.currentPlaythrough;
const getCurrentGame = (state: State) => state.currentGame;

export const getAllDeaths = createSelector(
    [getDeaths],
    (deaths) => {
        return deaths;
    }
)

export const getDeathsForCurrentPlaythrough = createSelector(
    [getDeaths, getCurrentPlaythrough],
    (deaths, playthroughId) => {
        return deaths.filter((death) => death.playthroughId == playthroughId)
    }
)

export const getDeathsForCurrentGame = createSelector(
    [getDeaths, getPlaythroughs, getCurrentGame],
    (deaths, playthroughs, gameId) => {
        const playthroughsForGame = playthroughs.filter((playthrough) => playthrough.gameId === gameId);
        return deaths.filter((death) => playthroughsForGame.some((playthrough) => playthrough.id === death.playthroughId));
    }
)