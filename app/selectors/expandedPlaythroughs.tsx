import { Playthrough, Game, Death, ExpandedPlaythrough } from '../state';
import { createSelector } from 'reselect';
import {
    getAllPlaythroughs,
    getAllGames,
    getAllDeaths,
    getSelectedGame,
    getPlaythroughsForCurrentGame,
} from '.';

function getExpandedPlaythrough(
    playthrough: Playthrough,
    games: Game[],
    deaths: Death[],
): ExpandedPlaythrough {
    const gameName = games.find(game => game.id === playthrough.gameId).name;
    const deathCount = deaths.filter(
        death => death.playthroughId === playthrough.id,
    ).length;

    return {
        ...playthrough,
        gameName,
        deathCount,
    };
}

export const getAllPlaythroughsExpanded = createSelector(
    [getAllPlaythroughs, getAllGames, getAllDeaths],
    (playthroughs, games, deaths) => {
        return playthroughs.map(playthrough =>
            getExpandedPlaythrough(playthrough, games, deaths),
        );
    },
);

export const getPlaythroughsForCurrentGameExpanded = createSelector(
    [getPlaythroughsForCurrentGame, getSelectedGame, getAllDeaths],
    (playthroughs, game, deaths) => {
        return playthroughs.map(playthrough =>
            getExpandedPlaythrough(playthrough, [game], deaths),
        );
    },
);
