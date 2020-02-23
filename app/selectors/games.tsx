import { createSelector } from 'reselect';
import { State } from '../state';
import { getSelectedPlaythrough } from './playthroughs';

export const getAllGames = (state: State) =>
    state.games.filter(game => game.complete);

export const getIncompleteGame = (state: State) =>
    state.games.find(game => !game.complete);

export const getSelectedGame = createSelector(
    [getAllGames, getSelectedPlaythrough],
    (games, playthrough) => {
        return games.find(game => game.id === playthrough.gameId);
    },
);
